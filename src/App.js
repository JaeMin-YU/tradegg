import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <>
    <sitenav>
      <div>
        <ui clas = "sitemenu">
          <li><a href="#">사이트 1</a></li>
          <li><a href="#">사이트 2</a></li>
        </ui>
      </div>
    </sitenav>
    <nav>
      <div class = "navbar">
        <div class = "logo">
          <a href="#">
            logo
          </a>
        </div>
        <ui class="menu">
          <li><a href="#">판매등록</a></li>
          <li><a href="#">캐릭터 거래</a></li>
          <li><a href="#">아이템 거래</a></li>
          <li><a href="#">상품권 몰</a></li>
          <li><a href="#">마이페이지</a></li>
          <li><a href="#">마일리지 충전</a></li>
          <li><a href="#">마일리지 출금</a></li>
        </ui>
      </div>
    </nav>
    <header>

    </header>
    <body>

    </body>
    <footer>
      <div class="footerItemLogo">ITEMLOGO</div>
      <ui class="footerList">
        <li>이용약관</li>
        <li>개인정보처리방침</li>
        <li>청소년보호정책</li>
        <li>이메일수집거부</li>
        <li>제휴문의</li>
        <li>고객센터</li>
      </ui>
      <div>
        <p>
          계정거래회사명
          대표자 : 홍길동 주소 : 서울특별시 종로구 종로 1 대표전화 : 1577-8910 E-mail : info@gmail.com
          사업자등록번호 : 102-81-11870 통신판매업신고번호 제 2023-서울금천-2750호
        </p>
      </div>
      <div>
      cITEMLOGO
      </div>
      <div>
        <div>고객센터</div>
        <div>1577-8910</div>
        <div>24시간 연중무휴</div>
      </div>
      <ui>
        <li>페북</li>
        <li>트위터</li>
        <li>인스타</li>
        <li>유튜브</li>
      </ui>
    </footer>
  </>
  );
}

// 프로필 로고
// 하트 로고
// 알림 로고
// 검색 로고

export default App;
