import "./App.css";
import { myProfile, myHeart, myUnion, searchOnNavbar } from "./srcAssets";
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
        <div className="footerItemLogo">ITEMLOGO</div>
        <ul className="footerList">
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>청소년보호정책</li>
          <li>이메일수집거부</li>
          <li>제휴문의</li>
          <li>고객센터</li>
        </ul>
        <div>
          <p>
            계정거래회사명 대표자 : 홍길동 주소 : 서울특별시 종로구 종로 1
            대표전화 : 1577-8910 E-mail : info@gmail.com 사업자등록번호 :
            102-81-11870 통신판매업신고번호 제 2023-서울금천-2750호
          </p>
        </div>
        <div>cITEMLOGO</div>
        <div>
          <div>고객센터</div>
          <div>1577-8910</div>
          <div>24시간 연중무휴</div>
        </div>
        <ul>
          <li>페북</li>
          <li>트위터</li>
          <li>인스타</li>
          <li>유튜브</li>
        </ul>
      </footer>
    </>
  );
}

export default App;
