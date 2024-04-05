import "./App.css";
import {
  myProfile,
  myHeart,
  myUnion,
  searchOnNavbar,
  call,
  face,
  insta,
  twitter,
  youtube,
} from "./srcAssets";
// import 변수명 from './srcAssets.파일명'

function App() {
  return (
    <>
      {/* 여기서 부터 헤더 입니다. */}
      <header>
        <toptab>
          <div>
            <ul className="sitemenu">
              <li className="currentPage">
                <a href="#" className="currentPageA">
                  사이트 1
                </a>
              </li>
              <li>
                <a href="#" className="otherPageA">
                  사이트 2
                </a>
              </li>
            </ul>
          </div>
        </toptab>
        <nav>
          <div className="navbar">
            {/* 로고 부분 */}
            <div className="logo">
              <a href="#">ITEM</a>
            </div>

            {/* 메뉴 부분 */}
            <ul className="menu">
              <li>
                <a href="#">판매등록</a>
              </li>
              <li>
                <a href="#">캐릭터 거래</a>
              </li>
              <li>
                <a href="#">아이템 거래</a>
              </li>
              <li>
                <a href="#">상품권 몰</a>
              </li>
              <li>
                <a href="#">마이페이지</a>
              </li>
              <li>
                <a href="#">마일리지 충전</a>
              </li>
              <li>
                <a href="#">마일리지 출금</a>
              </li>
            </ul>

            {/* 아이콘 부분 */}
            <ul className="navFunction">
              <li>
                <a href="#">
                  <img src={myProfile} alt="프로필 로고" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={myHeart} alt="하트 로고" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={myUnion} alt="알림 로고" />
                </a>
              </li>
              {/* 검색 */}
              <li>
                <a href="#">
                  <img
                    src={searchOnNavbar}
                    alt="검색 로고"
                    class="searchButton"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* 여기서 부터 Footer 입니다. */}
      <footer>
        <div className="footerBox">
          <div className="footerBox_Top">
            <div className="leftBox">
              <div className="footerItemLogo">ITEMLOGO</div>
              <ul className="footerList">
                <li>
                  <a href="#">이용약관</a>
                </li>
                <li>
                  <a href="#">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#">청소년보호정책</a>
                </li>
                <li>
                  <a href="#">이메일수집거부</a>
                </li>
                <li>
                  <a href="#">제휴문의</a>
                </li>
                <li>
                  <a href="#">고객센터</a>
                </li>
              </ul>
              <div className="information">
                <div className="companyName">계정거래회사명</div>
                <ul className="grayListOne">
                  <li>대표자 : 홍길동</li>
                  <li>주소 : 서울특별시 종로구 종로 1</li>
                  <li>대표전화 : 1577-8910</li>
                  <li>E-mail : info@gmail.com</li>
                </ul>
                <ul className="grayListTwo">
                  <li>사업자등록번호 : 102-81-11670</li>
                  <li>통신판매업신고번호 제 2023-서울금천-2750호</li>
                </ul>
              </div>
            </div>
            <div className="CSCenter">
              <div className="centerText">고객센터</div>
              <div className="centerNumber">
                <img src={call} alt="전화 아이콘" />
                <div className="number">1577-8190</div>
              </div>
              <div className="twentyfourseven">24시간 연중무휴</div>
            </div>
          </div>
          <div className="footerBox_Bottom">
            <div className="copyRight">ⓒITEMLOGO</div>
            <ul className="snsIcons">
              <li>
                <a href="#">
                  <img src={face} alt="Facebook Icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="Twitter Icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={insta} alt="Instagram Icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={youtube} alt="YouTube Icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
