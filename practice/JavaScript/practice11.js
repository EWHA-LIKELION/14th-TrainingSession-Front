



var coin = 0;

// 1. span 태그를 생성하고 변수 newSpan에 저장
var newSpan = document.createElement("span");

// 2. id가 money인 요소 아래에 newSpan을 자손으로 추가
var moneyDiv = document.getElementById("money");
moneyDiv.appendChild(newSpan);

// 3. newSpan 내부 텍스트에 "현재 금액 : n원" 삽입
newSpan.innerText = "현재 금액 : " + coin + "원";

// 4. newSpan의 id를 "current"로 설정
newSpan.id = "current";

// 5. 자판기의 물품들의 색상을 구매 가능 여부에 따라 변경하는 함수
function color_change() {
  var coffee = document.getElementById("coffee");
  var tea = document.getElementById("tea");
  var water = document.getElementById("water");

  // 1000원 이상: 옥수수수염차 가능 (빨간색 예시)
  if (coin >= 1000) {
    tea.style.color = "blue";
    coffee.style.color = "blue";
    water.style.color = "blue";
  } 
  // 700원 이상 1000원 미만: 커피 가능
  else if (coin >= 700) {
    tea.style.color = "red";
    coffee.style.color = "blue";
    water.style.color = "blue";
  } 
  // 500원 이상 700원 미만: 물만 가능
  else if (coin >= 500) {
    tea.style.color = "red";
    coffee.style.color = "red";
    water.style.color = "blue";
  } 
  // 그 이하: 모두 구매 불가
  else {
    tea.style.color = "red";
    coffee.style.color = "red";
    water.style.color = "red";
  }
}

// 6. 금액을 투입하면 coin이 그만큼 증가하고 alert로 알리는 함수 3개
function updateCoin(amount) {
  coin += amount;
  newSpan.innerText = "현재 금액 : " + coin + "원";
  alert(amount + "원이 투입되었습니다.");
  color_change();
}

function click_btn1() { updateCoin(1000); }
function click_btn2() { updateCoin(500); }
function click_btn3() { updateCoin(100); }

// 7. 구매할 물품을 선택하면 coin이 그만큼 감소하고 alert로 알리는 함수 3개
function buyItem(name, price) {
  if (coin >= price) {
    coin -= price;
    newSpan.innerText = "현재 금액 : " + coin + "원";
    alert(name + " 구매 완료!");
    color_change();
  } else {
    alert("잔액이 부족합니다.");
  }
}

function click_coffee() { buyItem("커피", 700); }
function click_tea() { buyItem("옥수수수염차", 1000); }
function click_water() { buyItem("물", 500); }

// 8. 물품 목록 버튼 3개에 각각 click 이벤트 리스너 추가
document.getElementById("coffee").addEventListener("click", click_coffee);
document.getElementById("tea").addEventListener("click", click_tea);
document.getElementById("water").addEventListener("click", click_water);

// 9. 금액 투입 버튼 3개에 각각 click 이벤트 리스너 추가
document.getElementById("btn1").addEventListener("click", click_btn1);
document.getElementById("btn2").addEventListener("click", click_btn2);
document.getElementById("btn3").addEventListener("click", click_btn3);

// 초기 색상 설정
color_change();