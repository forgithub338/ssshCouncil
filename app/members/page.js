'use client';
import { useState, useEffect } from 'react';

export default function Members() {
  const [selectedSession, setSelectedSession] = useState(12);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`/csvs/congressman${selectedSession}.csv`);
        const data = await response.text();
        const parsedMembers = parseCSV(data);
        setMembers(parsedMembers);
      } catch (error) {
        console.error('Error loading members:', error);
      }
    };

    fetchMembers();
  }, [selectedSession]);

  const parseCSV = (csv) => {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    
    return lines.slice(1).map(line => {
      const values = line.split(',');
      // 如果這行是空的或只有班級號碼，返回一個"從缺"的記錄
      if (!values[1] && values[0]) {
        return {
          classNum: values[0],
          name: '從缺',
          studentId: '',
          isNewMember: false,
          role: 'vacant'
        };
      }
      
      return {
        classNum: values[0],
        name: values[1],
        studentId: values[2],
        isNewMember: values[3] === '*',
        role: values[4]?.trim().toLowerCase() || 'member'
      };
    }).filter(member => member.classNum); // 只保留有班級號碼的記錄
  };

  // 按年級分組並排序
  const groupedMembers = members.reduce((acc, member) => {
    const gradeMatch = member.classNum?.match(/[一二三]/);
    if (!gradeMatch) return acc; // 如果找不到年級，跳過這個成員
    
    const grade = gradeMatch[0];
    if (!acc[grade]) acc[grade] = [];
    acc[grade].push(member);
    return acc;
  }, {});

  // 確保固定的年級順序
  const gradeOrder = ['一', '二', '三'];
  
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">議員成員</h1>
      
      {/* Session Selector */}
      <div className="flex justify-center mb-8">
        <select 
          value={selectedSession}
          onChange={(e) => setSelectedSession(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="12">第十二屆</option>
          <option value="11">第十一屆</option>
        </select>
      </div>

      {/* Members Grid */}
      {gradeOrder.map(grade => (
        groupedMembers[grade] && groupedMembers[grade].length > 0 && (
          <div key={grade} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {grade}年級成員
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {groupedMembers[grade]
                .sort((a, b) => {
                  // 議長優先，其次秘書處，最後一般議員，從缺放最後
                  const roleOrder = { chairman: 0, secretary: 1, member: 2, vacant: 3 };
                  return roleOrder[a.role] - roleOrder[b.role];
                })
                .map((member, index) => (
                <div 
                  key={`${member.classNum}-${index}`}
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 
                    ${member.role === 'vacant' ? 'opacity-50' : ''}`}
                >
                  {/* Member Photo */}
                  <div className="relative pt-[100%]">
                    <img 
                      src={member.role === 'vacant' ? '/images/default-avatar.png' : 
                        `/images/members/${selectedSession}/${member.studentId}.jpg`}
                      alt={member.name}
                      onError={(e) => {
                        e.target.src = '/images/default-avatar.png';
                      }}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      {member.isNewMember && (
                        <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                          非連任
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-1">
                      {member.role !== 'vacant' ? `學號: ${member.studentId}` : ''}
                    </p>
                    <p className="text-gray-600 text-sm mb-1">班級: {member.classNum}</p>
                    
                    {/* Role Badge */}
                    {member.role !== 'member' && member.role !== 'vacant' && (
                      <span className={`
                        inline-block px-2 py-1 text-xs rounded-full
                        ${member.role === 'chairman' ? 'bg-yellow-500 text-white' : ''}
                        ${member.role === 'secretary' ? 'bg-blue-500 text-white' : ''}
                      `}>
                        {member.role === 'chairman' ? '議長' : ''}
                        {member.role === 'secretary' ? '秘書處' : ''}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
}
