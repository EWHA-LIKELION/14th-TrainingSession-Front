# 14th-TrainingSession-Front
이화여자대학교 멋쟁이사자처럼 14기 프론트엔드 교육 세션
장예선

## 📌 Learning Summary
1. git
   : 버전 관리 시스템, 저장이 아닌 기록!
   
   1) git data flow
    - 정방향 흐름
       작업 디렉토리 (add)-> 스테이징 영역 (commit)-> 로컬 저장소 (push)-> 원격저장소
       
       - commit
         : 변경사항 모아 하나의 버전을 만들어 레포지토리 기록.  메모리 효율적 사용 가능
         git commit -m<>
       - add
         : 커밋할 변경사항 선택. 일부만 커밋할 때 사용.
         git add <특정 파일>, git add . (전부)
       - push
         : 로컬-> 원격 업로드
         git push origin <branchname>


         -.gitignore 
           : 말그대로 파일 추적X
    - 역방향 흐름
      정방향의 반대 흐름. pull -> reset -> restore\
       - reset
         : 차이점 삭제
         git reset <mode> <commit>
       - restore
         : 스테이징 취소 git restore --staged <>
           변경사항 삭제 git restore <>
       - pull 
         : 원격 -> 로컬 저장
         현재 브랜치 git pull
         특정 브랜치 git pull origin <branch name> 
    2) branch
       : 나눠서 보기 쉽게 만들기.
         git branch <브랜치이름>
         - checkout
           : 다른 브랜치로 전환
             git checkout <브랜치이름>
         - merge
           : 변경사항 병합
             git merge <브랜치이름>
             - Pull Request (PR)
               : 한 브랜치에서 다른 브랜치로 merge 요청.
         - clone
           : 레포지토리를 로컬로 복제

## 🔑 Key
flow를 잘 파악하여 적재적소에 사용하기.
readme 작성 미루지 않기. (나중에 까먹음..)
git help -a : 사용할 수 있는 git command 명령어 전체 리스트
git 명령어는 terminal에 사용할 것.

## 📒 Reference
<!--참고 문헌을 정리해 주세요. 공식 문서, 블로그 등의 링크와 함께 어떤 기능을 구현할 때 참고했는지 덧붙여 주세요.-->
https://modulabs.co.kr/blog/git-and-github-for-beginners 
-> git을 처음 배워봐서 익히기 위해 git 설명들을 담은 글을 읽었습니다.
https://blog.naver.com/jdusans/222043705693
-> git의 다양한 명령어들을 학습했습니다.

## 🔎 Result
<!--구현 결과를 올려주세요. 페이지, API 응답 등을 캡처해 주세요.-->

## ✍🏻 Review
이론을 배운 후 실제로 적용하는 과정이 시간이 꽤 걸려서 실습을 매끄럽게 할 수 있도록 공부를 해와야 함.
