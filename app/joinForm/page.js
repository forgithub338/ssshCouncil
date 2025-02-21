'use client';
import { useState } from 'react';

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    grade: '',
    lineId: '',
    preferredRole: '秘書處',
    previousOrgs: [],
    leadershipExp: '',
    leadershipPosition: '',
    interests: [],
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/join_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('提交失敗');

      alert('表單提交成功！我們會盡快與您聯繫。');
      setFormData({
        name: '',
        studentId: '',
        grade: '',
        lineId: '',
        preferredRole: '秘書處',
        previousOrgs: [],
        leadershipExp: '',
        leadershipPosition: '',
        interests: [],
        motivation: ''
      });
    } catch (error) {
      alert('提交失敗，請稍後再試。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-2xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mb-8">加入申請表</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label className="block mb-2 font-semibold">姓名</label>
                <input
                    type="text"
                    required
                    className="w-full p-2 border rounded-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                </div>

                <div>
                <label className="block mb-2 font-semibold">學號</label>
                <input
                    type="text"
                    required
                    className="w-full p-2 border rounded-lg"
                    value={formData.studentId}
                    onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                />
                </div>

                <div>
                <label className="block mb-2 font-semibold">班級座號</label>
                <input
                    type="text"
                    required
                    pattern="[0-9]*"
                    title="請輸入數字"
                    className="w-full p-2 border rounded-lg"
                    value={formData.grade}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                            setFormData({...formData, grade: value})
                        }
                    }}
                    placeholder="例：20531"
                />
                </div>

                <div>
                <label className="block mb-2 font-semibold">Line ID</label>
                <input
                    type="text"
                    required
                    className="w-full p-2 border rounded-lg"
                    value={formData.lineId}
                    onChange={(e) => setFormData({...formData, lineId: e.target.value})}
                />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">想加入的部門：</label>
                    <div className="space-y-2">
                        {['秘書處', '議事處', '公報處'].map((role) => (
                            <div key={role} className="flex items-center">
                                <input
                                    type="radio"
                                    id={role}
                                    name="preferredRole"
                                    className="mr-2"
                                    checked={formData.preferredRole === role}
                                    onChange={(e) => setFormData({...formData, preferredRole: role})}
                                />
                                <label htmlFor={role}>{role}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                <label className="block mb-2 font-semibold">是否有學生自治相關經驗？（可複選）</label>
                <div className="space-y-2">
                    {[
                        '松山高中學生會',
                        '松山高中學生議會(議員)'
                    ].map((org) => (
                        <div key={org} className="flex items-center">
                            <input
                                type="checkbox"
                                id={org}
                                className="mr-2"
                                checked={formData.previousOrgs.includes(org)}
                                onChange={(e) => {
                                    let updatedOrgs;
                                    if (e.target.checked) {
                                        updatedOrgs = [...formData.previousOrgs, org];
                                    } else {
                                        updatedOrgs = formData.previousOrgs.filter(item => item !== org);
                                    }
                                    setFormData({...formData, previousOrgs: updatedOrgs});
                                }}
                            />
                            <label htmlFor={org}>{org}</label>
                        </div>
                    ))}
                    
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="其他"
                            className="mr-2"
                            checked={formData.previousOrgs.includes('其他')}
                            onChange={(e) => {
                                let updatedOrgs;
                                if (e.target.checked) {
                                    updatedOrgs = [...formData.previousOrgs, '其他'];
                                } else {
                                    updatedOrgs = formData.previousOrgs.filter(item => item !== '其他');
                                    setFormData({...formData, previousOrgs: updatedOrgs, otherOrg: ''});
                                    return;
                                }
                                setFormData({...formData, previousOrgs: updatedOrgs});
                            }}
                        />
                        <label htmlFor="其他">其他</label>
                        {formData.previousOrgs.includes('其他') && (
                            <input
                                type="text"
                                className="ml-2 p-1 border rounded"
                                placeholder="請輸入一項"
                                value={formData.otherOrg || ''}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    const updatedOrgs = formData.previousOrgs.filter(item => item !== formData.otherOrg);
                                    if (newValue) {
                                        updatedOrgs.push(newValue);
                                    }
                                    setFormData({
                                        ...formData,
                                        otherOrg: newValue,
                                        previousOrgs: updatedOrgs
                                    });
                                }}
                            />
                        )}
                    </div>
                </div>
                </div>

                <div>
                <label className="block mb-2 font-semibold">有無社團幹部經驗？</label>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="hasLeadership"
                            name="leadershipExp"
                            className="mr-2"
                            value="有"
                            checked={formData.leadershipExp === "有"}
                            onChange={(e) => setFormData({...formData, leadershipExp: e.target.value})}
                        />
                        <label htmlFor="hasLeadership">有</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="noLeadership"
                            name="leadershipExp"
                            className="mr-2"
                            value="沒有"
                            checked={formData.leadershipExp === "沒有"}
                            onChange={(e) => setFormData({...formData, leadershipExp: e.target.value})}
                        />
                        <label htmlFor="noLeadership">沒有</label>
                    </div>
                    {formData.leadershipExp === "有" && (
                        <div className="mt-2">
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="請輸入一項職位"
                                value={formData.leadershipPosition || ''}
                                onChange={(e) => setFormData({...formData, leadershipPosition: e.target.value})}
                            />
                        </div>
                    )}
                </div>
                </div>

                <div>
                <label className="block mb-2 font-semibold">你想要嘗試哪些內容？（可複選）</label>
                <div className="space-y-2">
                    {[
                        '場地準備', '跑場單', '收發公文', '協助議事(遞麥克風等)',
                        '製作會議記錄', '製作會議簡報', '製作開會通知單', '攝影',
                        '辦理他校交流', '社群帳號/網站管理'
                    ].map((interest) => (
                        <div key={interest} className="flex items-center">
                            <input
                                type="checkbox"
                                id={interest}
                                className="mr-2"
                                checked={formData.interests.includes(interest)}
                                onChange={(e) => {
                                    const updatedInterests = e.target.checked
                                        ? [...formData.interests, interest]
                                        : formData.interests.filter(i => i !== interest);
                                    setFormData({...formData, interests: updatedInterests});
                                }}
                            />
                            <label htmlFor={interest}>{interest}</label>
                        </div>
                    ))}
                </div>
                </div>

                <div>
                <label className="block mb-2 font-semibold">加入動機</label>
                <textarea
                    required
                    className="w-full p-2 border rounded-lg h-32"
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                />
                </div>

                <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 disabled:bg-gray-400"
                >
                {isSubmitting ? '提交中...' : '送出申請'}
                </button>
            </form>
            </div>
    </main>
    
  );
}
