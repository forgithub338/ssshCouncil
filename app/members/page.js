import { promises as fs } from 'fs';
import path from 'path';

async function getSessionData(session) {
  const baseDir = path.join(process.cwd(), 'public/csvs', session);
  
  // Read and parse CSV files
  const congressmanData = await fs.readFile(path.join(baseDir, 'congressman.csv'), 'utf-8');
  const secretaryData = await fs.readFile(path.join(baseDir, 'secretary.csv'), 'utf-8');
  
  // Parse CSV data (skip headers)
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

  return { congressmen, secretaries };
}

export default async function MembersPage() {
  const session = '12'; // You can make this dynamic later
  const { congressmen, secretaries } = await getSessionData(session);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">第{session}屆成員</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">秘書處</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {secretaries.map((secretary, index) => (
            <div key={index} className="border p-4 rounded">
              <h3 className="font-bold">{secretary.title}</h3>
              <p>{secretary.classNum}班 {secretary.name}</p>
              <p className="text-gray-600">{secretary.id}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">議員</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {congressmen.map((congressman, index) => (
            <div key={index} className="border p-4 rounded">
              <h3 className="font-bold">{congressman.classNum}班</h3>
              <p className={congressman.name === '從缺' ? 'text-red-600 font-bold' : ''}>{congressman.name}</p>
              {congressman.id && <p className="text-gray-600">{congressman.id}</p>}
              {congressman.nonConsecutive && 
                <span className="text-sm text-blue-600 rounded-full bg-blue-100 px-2 py-1">非連任議員</span>
              }
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
