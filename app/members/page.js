import { promises as fs } from 'fs';
import path from 'path';

async function getSessionData(session) {
  const baseDir = path.join(process.cwd(), 'public/csvs', session);
  
  // Read and parse CSV files
  const chairmanData = await fs.readFile(path.join(baseDir, 'chairman.csv'), 'utf-8');
  const congressmanData = await fs.readFile(path.join(baseDir, 'congressman.csv'), 'utf-8');
  const secretaryData = await fs.readFile(path.join(baseDir, 'secretary.csv'), 'utf-8');
  
  // Parse CSV data (skip headers)
  const chairman = chairmanData
    .split('\n')
    .slice(1)
    .filter(line => line.trim())
    .map(line => {
      const [classNum, name, id] = line.split(',');
      return { classNum, name, id };
    });

  const congressmen = congressmanData
    .split('\n')
    .slice(1)
    .filter(line => line.trim())
    .map(line => {
      const [classNum, name, id, nonConsecutive] = line.split(',');
      return { classNum, name: name || '從缺', id, nonConsecutive };
    });

  const secretaries = secretaryData
    .split('\n')
    .slice(1)
    .filter(line => line.trim())
    .map(line => {
      const [title, classNum, name, id] = line.split(',');
      return { title, classNum, name, id };
    });

  // Modify the secretaries grouping
  const secretaryPositions = {
    '秘書長': secretaries.filter(s => s.title === '秘書長'),
    '議事長': secretaries.filter(s => s.title === '議事長'),
    '公報長': secretaries.filter(s => s.title === '公報長'),
    '顧問秘書': secretaries.filter(s => s.title === '顧問秘書'),
    '總務組秘書': secretaries.filter(s => s.title === '總務組'),
    '紀錄組秘書': secretaries.filter(s => s.title === '紀錄組'),
    '攝影組秘書': secretaries.filter(s => s.title === '攝影組'),
    '網管組秘書': secretaries.filter(s => s.title === '網管組'),
    '公關組秘書': secretaries.filter(s => s.title === '公關組'),
    '收發組秘書': secretaries.filter(s => s.title === '收發組'),
    '出納組秘書': secretaries.filter(s => s.title === '出納組'),
  };

  return { congressmen, secretaryPositions, chairman };
}

export default async function MembersPage({ searchParams }) {
  const availableSessions = ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
  const session = searchParams.session || '12'; // Get session from URL params or default to '12'
  const { congressmen, secretaryPositions, chairman } = await getSessionData(session);

  // Group congressmen by grade
  const congressmenByGrade = {
    '1': congressmen.filter(c => c.classNum.startsWith('1')),
    '2': congressmen.filter(c => c.classNum.startsWith('2')),
    '3': congressmen.filter(c => c.classNum.startsWith('3')),
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* 側邊欄 */}
      <div className="w-full md:w-48 bg-gray-100 p-4 sticky top-0 z-10 md:min-h-screen">
        <h2 className="text-xl font-semibold mb-4">選擇屆次</h2>
        <div className="flex md:block overflow-x-auto whitespace-nowrap pb-2 md:pb-0 md:space-y-2">
          {availableSessions.map((s) => (
            <a
              key={s}
              href={`/members?session=${s}`}
              className={`inline-block md:block px-4 py-2 rounded mr-2 md:mr-0 ${
                s === session
                  ? 'bg-gray-800 text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              第{s}屆
            </a>
          ))}
        </div>
      </div>

      {/* 主要內容區 */}
      <div className="flex-1 px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">第{session}屆成員</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">議長</h2>
          <div className="mb-8 bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 md:p-6 shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-4 inline-block bg-gray-800 text-white px-4 md:px-6 py-2 rounded-full w-full text-center">
              議長
            </h3>
            <div className="border bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h4 className="font-bold text-gray-800 bg-gray-100 inline-block px-3 py-1 rounded-full mb-2">
                {chairman[0].classNum}班
              </h4>
              <p className="text-gray-700 mt-1">{chairman[0].name}</p>
              {chairman[0].id && <p className="text-gray-500 text-sm mt-1">{chairman[0].id}</p>}
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">秘書處</h2>
          {Object.entries(secretaryPositions).map(([position, positionSecretaries]) => (
            <div key={position} className="mb-8 bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 md:p-6 shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-4 inline-block bg-gray-800 text-white px-4 md:px-6 py-2 rounded-full w-full text-center">
                {position}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
                {positionSecretaries.map((secretary, index) => (
                  <div 
                    key={index} 
                    className="border bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <h3 className="font-bold text-gray-800 bg-gray-100 inline-block px-3 py-1 rounded-full mb-2">
                      {secretary.classNum}班
                    </h3>
                    <p className="text-gray-700 mt-1">{secretary.name}</p>
                    {secretary.id && <p className="text-gray-500 text-sm mt-1">{secretary.id}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">議員</h2>
          {Object.entries(congressmenByGrade).map(([grade, gradeCongressmen]) => (
            <div key={grade} className="mb-8 bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 inline-block bg-gray-800 text-white px-6 py-2 rounded-full w-full text-center">
                {grade}年級
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                {gradeCongressmen.map((congressman, index) => (
                  <div 
                    key={index} 
                    className="border bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <h3 className="font-bold text-gray-800 bg-gray-100 inline-block px-3 py-1 rounded-full mb-2">
                      {congressman.classNum}班
                    </h3>
                    <p className={`${congressman.name === '從缺' ? 'text-red-600 font-bold' : 'text-gray-700'} mt-1`}>
                      {congressman.name}
                    </p>
                    {congressman.id && <p className="text-gray-500 text-sm mt-1">{congressman.id}</p>}
                    {congressman.nonConsecutive && 
                      <span className="text-sm text-blue-600 rounded-full bg-blue-50 px-3 py-1 mt-2 inline-block">
                        非連任議員
                      </span>
                    }
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
