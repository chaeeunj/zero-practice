// - 웹 스토리지

// 브라우저에 저장되는 키-값 쌍
// 1. 로컬 스토리지 : 브라우저 종료 시에도 유지되는 데이터
// 2. 세션 스토리지 : 새로 고침 시에도 유지되는 데이터(같은 탭 내에서만)

// 쿠키와 다른 점
// 1. 요청 헤더에 포함되지 않음
// 2. 클라이언트에서만 조정 가능
// 3. 해당 URL에서만 접근 가능

// 일정 시간동안만 데이터가 유지되길 바라면 쿠키를 사용

// --------------------------------------------------

// 웹 스토리지 쓰기

// 1. 로컬 스토리지
// (1) localStorage.setItem('key', value);
// ex) localStorage.setItem('name', 'jce');
// (2) localStorage.key = value;

// 2. 세션 스토리지
// (1) sessionStorage.setItem('key', value);
// (2) sessionStorage.key = value;

// -------------------------------------------------

// 웹 스토리지 접근

// 1. 로컬 스토리지
// (1) localStorage.getItem('key');
// (2) localStorage.key

// 2. 세션 스토리지
// (1) sessionStorage.getItem('key');
// (2) sessionStorage[key];

// -------------------------------------------------

// 웹 스토리지 삭제

// 1. 로컬 스토리지
// (1) localStorage.removeItem('key');
// (2) localStorage.clear();

// 2. 세션 스토리지
// (1) sessionStorage.removeItem('key');
// (2) sessionStorage.clear();
