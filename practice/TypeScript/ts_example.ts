function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

//console.log(add(1, "2"));

const name: string = "멋쟁이사자처럼";

let age: number; // 초기값 없이 선언 가능
age = 20; // 재할당 가능

const isStudent: boolean = true;

const likelion: string[] = [];
likelion.push("lion1");

let babylion: [string, number, string] = ["아기사자", 14, "프론트엔드"]; // 이게 튜플!

enum part {
  PM = "기획디자인",
  FE = "프론트엔드",
  BE = "백엔드", // 관련된 상수 묶어서 관리 가능
}
