# 초기 설정
### 1.리포지토리를 에디터에 클론

1. 리포지토리 주소 복사.

   <img width="480" alt="스크린샷 2023-09-06 00 20 53" src="https://github.com/ghdi6211/TimeSyncer/assets/82808175/3f06d055-cbd3-4575-b4e8-6dfcfd79e78c">


2. 원하는 폴더에 에디터를 열고 터미널에
   ``` git clone  리포지토리의 주소(1.에서 복사한 내용) ```를 입력

   위 명령어를 입력시 아래와 같은 구조를 가진다.
   - ```
     ├── TimeSyncer
     │   ├── .github
     │   ├── client
     │   │     └── ~~~
     │   └── server
     │   │     └── ~~~
     │   ├── .gitignore
     │   ├── package
     │   ├── README
     │   └── yarn
     └──
     ```

3.  패키지 의존성 설치

   - 클라이언트만 사용
     - 프로젝트폴더/TimeSyncer/client 위치에서 ```yarn 또는 yarn install``` 패키지 설치
     - 패키지 설치후 ```yarn start```로 클라이언트 기동
    
   - 서버만 사용
      - [최신버전 (3.11.5) python 다운로드](https://www.python.org/downloads/)
        - 환경변수 설정 필요할지도?
      - /TimeSyncer에서 pipenv를 다운로드
         - window :  ```pip install pipenv```
         - mac :  ```brew install pipenv```
      - 터미널에서 ```cd server``` 이동
      - ```pipenv install``` 입력
      - ```yarn server``` 서버 기동

   - 클라이언트와 서버 둘다 사용
      - 자신의 디렉토리 위치 확인 mac = pwd , window = dir
      - 프로젝트폴더/TimeSyncer 이 위치에서 ```yarn install-all``` 입력시 모든 디렉토리의 패키지가 설치된다. **※server는 수정 필요**
      - 패키지 설치후 ```yarn dev```를 입력시 클라이언트와 서버가 함께 돌아간다.
      - client = localhost:3000, server localhost:5000
