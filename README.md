# wasm-rest-test

rust로 작성된 wasm 모듈을 테스트하기 위한 간단한 코드입니다.

# 사용법

```shell
# wasm-example 디렉터리내에서 아래 명령어 실행
# wasm-pack을 사용하여 wasm 모듈을 빌드하고 루트 디렉터리에 /pkg 디렉터리를 생성합니다.
wasm-pack build --target web --out-dir ../pkg
```

```shell
# 루트 디렉터리에서 아래 명령어 실행
npm install
npm run dev
```

후기

- 꼭 wasm으로 실행한게 더 빠르다는 보장은 없었다.
- 단순 덧셈 연산은 wasm이 더 느리게 나왔다. (JIT 컴파일러가 최적화가 잘 되어있음)
- 정렬 연산은 wasm이 훨씬 빠르게 나왔다.

```
✅ JS sort: 6745.30ms
🚀 WASM sort: 868.80ms
```
