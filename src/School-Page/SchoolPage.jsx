import './school.css'
import teacher from './img/teachers.jpg'
import classrom from './img/class.jpg'
import qoriqlash from './img/qoriqlash.jpg'
import students from './img/students.webp'
import eskisi from './img/eskisi.jpeg'
import eskisi2 from './img/eskisi2.jpeg'
import eskisi3 from './img/eskisi3.png'
import yengisi from './img/yengisi.jpg'
import yengisi2 from './img/yengisi3.jpg'
import yengisi3 from './img/yengisi2.jpg'
import lagatip from './img/lagatip.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InstagramOutlined, UserOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons'




function App() {
  return (

    <>
      <div className="container">
        <div className="malumot">
          <h1>NIMA UCHUN AYNAN BIZ</h1>
          <div className="boshjoy"></div>
          <div className="nega_biz">
            <div className="nega_biz1">
              <img src={teacher} alt="" />
              <h1>BIZNING USTOZLAR</h1>
              <h3>28-maktabda ustozlarning barchasi uzoq vaqtli tajribaga ega, o'quvchilarbilan ishlash uslubi turli xil</h3>
            </div><hr />
            <div className="nega_biz1">
              <img src={classrom} alt="" />
              <h1>MAKTAB SHAROITI</h1>
              <h3>Bizning maktabda wi-fi, zamonaviy kampyuterlar, praektorlar va boshqa zamonaviy qulayliklar mavjud</h3>
            </div><hr />
            <div className="nega_biz1">
              <img src={qoriqlash} alt="" />
              <h1>MAKTAB XAFSIZLIGI</h1>
              <h3>Maktabdagi xafsizlikni ishonchli desak boladi chunki davlatimiz tomonidan maktabimiz iqtisoslashtirilgan bolib u yerni xafsizlik-xizmati hodimlari qoriqlaydi</h3>
            </div><hr />
          </div>
        </div>




        <div className="boshjoy"></div>

        <div className="statistika">
          <div className="statistika_one">
            <img src={students} alt="" />
            <div className="text">
              <h1>MAKTAB TOG'RISIDAGI MALUMOTLAR</h1>
              <h3>Hozirda maktabimizda o'qiyongan oquvchilar soni jami 2 104 nafarga yetdi boshlang'ich ta'limda o'qiydiganlar soni 663 nafar umumiy orta ta'limda esa 1396 nafar.O'qituvchilar esa jami 140 taga teng bularga M.R.Azimova 11 yildan buyon raxbarlik qiladilar</h3>
            </div>
          </div>
          <hr />
          <div className="boshjoy"></div>
          <div className="statistika_two">
            <h1>maktabimiz kecha</h1>
            <div className="eski_maktab">
              <img src={eskisi} alt="" /><hr />
              <img src={eskisi2} alt="" /><hr />
              <img src={eskisi3} alt="" /><hr />
            </div>

            <h1>maktabimiz bugun</h1>
            <div className="eski_maktab">
              <img src={yengisi} alt="" /><hr />
              <img src={yengisi2} alt="" /><hr />
              <img src={yengisi3} alt="" /><hr />
            </div>

          </div>
        </div>


        <div className="boshjoy"></div>

      </div>


      <div className="footer">
        <div className="container">
          <div className="fouter">
            <div className="fouter-1">
              <img src={lagatip} alt="" />
              <h2>28-IDUM</h2>
              <span>
                <InstagramOutlined className='icon-1' />
                <UserOutlined className='icon-2' />
                <FacebookOutlined className='icon-3' />
                <YoutubeOutlined className='icon-4' />
              </span>

            </div>
            <div className="fouter-2">
                <h2>Ma'lumotlringizni qoldiring</h2>
                <input type="text" placeholder='  savol' className='inpt' />
                <input type="number" placeholder='  raqam' className='inpt' />
                <button className='btnnn'>Jonatish</button>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};


export default App;
