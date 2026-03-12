## 📌 Learning Summary
<!--d공부한 내용을 새로 알게 된 것을 중점으로 정리해 주세요.-->
1. git
   : 버전 관리 시스템
   
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
<!--기능 구현 핵심 포인트, 실수한 점, 앞으로 유의할 점 등을 짚어 주세요.-->
flow를 잘 파악하여 적재적소에 사용하기.
readme 작성 미루지 않기. (나중에 까먹음..)


## 📒 Reference
<!--참고 문헌을 정리해 주세요. 공식 문서, 블로그 등의 링크와 함께 어떤 기능을 구현할 때 참고했는지 덧붙여 주세요.-->


## 🔎 Result
<!--구현 결과를 올려주세요. 페이지, API 응답 등을 캡처해 주세요.-->
저번 실습 때 branch 삭제하여 구현 결과가 없습니다.

## ✍🏻 Review
<!--회고를 작성해 주세요. 자랑할 점, 아쉬운 점, 궁금한 점 등을 구체적으로 적어주세요.-->
이론을 배운 후 실제로 적용하는 과정이 시간이 꽤 걸려서 실습을 매끄럽게 할 수 있도록 공부를 해와야 함.