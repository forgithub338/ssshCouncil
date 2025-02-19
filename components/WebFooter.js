import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function WebFooter() {
    return (
        <footer>
            <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                    <div className="col-span-1 md:col-span-6 text-white space-y-2">
                        <p>台北市信義區基隆路一段156號</p>
                        <p>club_sslec@sssh.tp.edu.tw</p>
                        <div className="my-4"></div>
                        <p>本網站由松山高中學生議會祕書處創設。</p>
                        <p>Copyright © 2025 SSLEC, All rights reserved.</p>
                    </div>
                    
                    <div className="col-span-1 md:col-span-2 flex justify-center md:justify-end space-x-4 md:space-x-0 md:space-y-4">
                        <a href="https://www.sssh.tp.edu.tw/home" target="_blank">
                            <img src="/images/school_logo.png" alt="松山高中校網" className="w-[50px] h-[50px] rounded-lg hover:opacity-80" />
                        </a>
                        <a href="https://songconcil35.wixstudio.com/sssc" target="_blank">
                            <img src="/images/union_logo.png" alt="學生會網站" className="w-[50px] h-[50px] rounded-lg hover:opacity-80"/>
                        </a>
                    </div>
                    
                    <div className="col-span-1 md:col-span-2 flex justify-center md:justify-start space-x-4 md:space-x-0 md:space-y-4">
                        <a href="https://www.instagram.com/sslec_11th/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="w-[50px] h-[50px] text-white hover:text-orange-500" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCktJHl0q_kwCRxxcsdQ2CNg/community" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} className="w-[50px] h-[50px] text-white hover:text-orange-500" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}