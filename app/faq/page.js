export default function FAQ() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">學生議會搞甚麼？</h1>
          
          <div className="space-y-8">
            {/* 學生議會在幹嘛? */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">學生議會在幹嘛？</h2>
              <p className="text-gray-700 mb-4">學生議會職權如下：</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>訂定與變更本會學生自治法規及相關辦法。</li>
                <li>議決本會會費收取數額與方式。</li>
                <li>議決學期會務計劃及經費預、決算。</li>
                <li>議決會員權利義務有關之其他事項。</li>
                <li>質詢學生會幹部並聽取報告。</li>
              </ol>
              <p className="text-sm text-[#B22222] mt-4 bg-gray-200 p-2 rounded-lg w-fit">
                《 臺北市立松山高級中學學生自治聯合會組織章程》 第九條
              </p>
            </div>

            {/* 學生議會不就是學生會嗎? */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">學生議會不就是學生會嗎？</h2>
              <p className="text-gray-700">
                <b>學生會</b>負責辦理大型校內活動、協助校內社團，以及推動跨校學生事務等行政工作，是學生自治聯合會的最高行政機關，類似於<b>行政院</b>。
                <br/><b>學生議會</b>則負責審查學生會的活動報告與預決算，並修訂學生自治相關法規，是學生自治聯合會的最高立法機關，類似於<b>立法院</b>。
              </p>
            </div>

            {/* 怎麼加入學生議會? */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">怎麼加入學生議會？</h2>
              <p className="text-gray-700">
                各班學生基於平等、普通、秘密、無記名方式選任學生議員一人，任期一學期，連選得連任。
              </p>
              <p className="text-sm text-[#B22222] mt-4 bg-gray-200 p-2 rounded-lg w-fit">
                《 臺北市立松山高級中學學生自治聯合會組織章程》 第八條(節錄)
              </p>
            </div>

            {/* 怎麼當學生議會議長? */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">怎麼當學生議會議長？</h2>
              <p className="text-gray-700">
                學生議會設置一名學生議長，由學生議員以不記名投票方式互選產生，任期為一學期，可連選連任。
                <br/>學生議長負責召開學生議會，若有三分之一以上的學生議員提議，且過半數議員出席，經出席議員三分之二以上同意，即可進行改選。
              </p>
              <p className="text-sm text-[#B22222] mt-4 bg-gray-200 p-2 rounded-lg w-fit">
                《 臺北市立松山高級中學學生自治聯合會組織章程》 第十條
              </p>
            </div>

            {/* 非議員參與方式 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">我不是學生議員，有什麼方法能夠參與學生議會？</h2>
              <p className="text-gray-700">
                學生議會會議皆開放全校師生旁聽，若您對學生議會滿腹熱忱，也歡迎您加入學生議會秘書處、議事處、公報處，成為行政夥伴的一員！
              </p>
            </div>

            {/* 開會時間 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">學生議會什麼時候開會？</h2>
              <p className="text-gray-700">
                學生議會每週五召開定期會(得增減)，開會時間以12:10~12:55分為主。
              </p>
            </div>

            {/* 請假說明 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">不克出席會議怎麼辦？</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>請同班會員簽屬代為行使職權委託書代替您本人參加會議。</li>
                <li>請您向秘書處報備請假，可自行影印或以電子檔將請假單交予秘書長，亦可使用議員快速請假專區。</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
