function login(event) {
  event.preventDefault(); // 폼 제출 막기

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('error-message');

  if (username === 'nsb' && password === '25') {
    window.location.href = 'https://yunseounghwan0921.github.io/main/'; // 성공 시 이동
  } else {
    error.textContent = '아이디 또는 비밀번호가 틀렸습니다.';
  }
}
