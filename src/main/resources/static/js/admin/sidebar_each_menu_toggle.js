/**
 * 사이드바 메뉴 아이템 토글 기능
 *
 * 구현할 기능:
 * 1. 메뉴 클릭시 서브메뉴 표시/숨김 애니메이셔
 * 2. 화살표 아이콘 회전 애니메이션
 *
 *  불러올 클래스:
 * - menu-active: 현재 활성화된 메뉴 표시
 * - show: 서브메뉴 표시 상태
 * - menu-open: 화살표 아이콘 회전 상태
 */

// css로 구현이 다 되어 있기 때문에 js로는
// menu-active클래스가 있으면 변수명.classList.remove
// menu-active클래스가 없으면 변수명.classList.add
// 만 하면 된다.

document.addEventListener("DOMContentLoaded", function () {
  // 페이지 내의 모든 메뉴 아이템 요소 선택
  const menuItems = document.querySelectorAll(".menu-item");

  // 각 메뉴 아이템에 대해 클릭 이벤트 리스너 등록
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", function (e) {
      // 기본 클릭 이벤트 동작 방지 (페이지 이동 방지)
      e.preventDefault();

      // 현재 클릭된 메뉴의 활성화 상태 확인
      // menu-active 클래스 존재 여부로 판단
      const isActive = menuItem.classList.contains("menu-active");

      /**
       * 아코디언 효과를 위해 모든 메뉴를 닫는 과정
       * 1. 활성화 클래스 제거
       * 2. 서브메뉴 숨김
       * 3. 화살표 아이콘 원위치
       */

      menuItems.forEach((item) => {
        // 활성화 상태 제거
        item.classList.remove("menu-active");

        // 각 메뉴의 서브메뉴 요소 찾기
        const submenu = item.nextElementSibling;
        if (submenu) {
          // 서브메뉴가 존재하면 숨김 처리
          submenu.classList.remove("show");
        }

        // 각 메뉴의 화살표 아이콘 요소 찾기
        const arrow = item.querySelector(".menu-arrow");
        if (arrow) {
          // 화살표가 존재하면 회전 상태 제거
          arrow.classList.remove("menu-open");
        }
      });

      /**
       * 현재 클릭한 메뉴가 닫힌 상태였다면 해당 메뉴만 열기
       * 1. 활성화 클래스 추가
       * 2. 서브메뉴 표시
       * 3. 화살표 아이콘 회전
       */
      if (!isActive) {
        // 메뉴 활성화
        menuItem.classList.add("menu-active");

        // 현재 메뉴의 서브메뉴 요소 찾기
        const submenu = menuItem.nextElementSibling;
        if (submenu) {
          // 서브메뉴가 존재하면 표시
          submenu.classList.add("show");
        }

        // 현재 메뉴의 화살표 아이콘 찾기
        const arrow = menuItem.querySelector(".menu-arrow");
        if (arrow) {
          // 화살표가 존재하면 회전 상태 추가
          arrow.classList.add("menu-open");
        }
      }
    });
  });
});
