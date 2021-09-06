# local db(mysql)

```shell
# 1. 이미지 생성
docker build -t dockerfullstackapp/mysql ./

# 2. 컨테이너 실행
docker run -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=myapp -p 3306:3306 dockerfullstackapp/mysql

# 2-1(Optional). -d 옵션까지 주면 데몬으로 실행함
# 2-2(Optional). -v ./mysql_data:/var/lib/mysql 옵션으로 마운트시켜놓으면 컨테이너 내렸다가 올려도 DB데이터 유지.

...

# 3. 컨테이너 중지 및 종료
# 컨테이너 목록 확인
docker ps -a
# 해당 컨테이너 아이디로 컨테이너 중지 수행
docker stop <CONTAINER-ID>
# 해당 컨테이너 아이디로 컨테이너 종료 수행
docker rm <CONTAINER-ID>
```