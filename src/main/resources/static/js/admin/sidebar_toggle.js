/**
 * 사이드바 토글 기능
 * - 토글 버튼 클릭시 사이드바 확장/축소
 * - 초기 상태 설정
 */

// 사이드바 전체 여닫기 - .sidebar-container
// 토글 버튼 돌리기 - .sidebar-toggle-btn

document.addEventListener("DOMContentLoaded", function () {
  // 토글 버튼과 사이드바 요소 선택
  const toggleButton = document.querySelector(".sidebar-toggle-btn");
  const sidebar = document.querySelector(".sidebar-container");

  // 토글 상태 관리
  let isExpanded = true; // 초기 상태는 열림

  // 토글 버튼 클릭 이벤트 처리
  toggleButton.addEventListener("click", function () {
    // 사이드바 토글
    if (isExpanded) {
      sidebar.classList.remove("sidebar-expanded");
      toggleButton.classList.remove("sidebar-expanded");
    } else {
      sidebar.classList.add("sidebar-expanded");
      toggleButton.classList.add("sidebar-expanded");
    }

    // 토글 상태 변경
    isExpanded = !isExpanded;
  });
});
