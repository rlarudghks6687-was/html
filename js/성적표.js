    //함수: 특정한 기능을 하는 명령어 집합
    //함수 정의: 함수의 내용을 만들어 놓는 것
    //함수 호출: 함수 실행
    //*스코프(유효범위): 변수의 사용 범위
    var a = 20;
    let script = 30;
    let result = 999;
    //함수 정의
    function sum(n){
      let result = 0;
      for(let i = 1; i <= n; i++){
        result += i;
      }
      return result;
    }
    //함수 실행(호출)
    console.log(sum(5));
    console.log(result);
    
    //min에서 max까지 합을 구하는 함수를 정의
    // let min = 5;
    // let max = 10;
    // result = 0;

    //함수 호출 -> 결과 출력
    result = sum2(1, 10);
    result = sum2(5, 10);
    console.log(result);

    //함수 정의 
    function sum2(m, n){
      let result = 0;
      for(let i = m; i <= n; i++){
        result += i;
      }
      return result;
    }

    //익명함수: 이름이 업는 함수 -> 변수에 저장(선언이 된 이후에 사용 가능)
    const plus = function(a, b){
      return `a + b = ${a} + ${b} = ${a + b}`;
    }
    console.log(plus(100, 200));

    //즉시 실행 함수 - 초기화 방지 ,
    result = (function(a, b){
      return `${a} - ${b} = ${a - b}`;
    })(300, 100)
    console.log(result);
    
    // 결과로 함수가 전달
    result = (function(){
      return function(a, b){
        return `${a} - ${b} = ${a - b}`;
      }
    })()
    console.log(result(500, 200));
    
    //콜백함수: 다른 함수의 매개변수의 값으로 전달되는 함수
    //실행순서가 있는 경우 사용
    //커피 주문 -> 커피 완성
    //커피 완성 함수(선언함수)
    // function done(coffee){
    //   console.log(`${coffee} 준비 완료`);
    // }

    //익명함수
    // const done = function(coffee){
    //   console.log(`${coffee} 준비 완료`);
    // }

    //익명 -> 화살표 함수(function대신 '=>' 로 간략하게 표현)
    //익명함수만 화살표로 변경
    const done = (coffee) => {
      console.log(`${coffee} 준비 완료`);
    }

    //커피 주문 함수
    function order(coffee, callback){
      console.log(`${coffee} 주문 접수`);
      setTimeout(function(){
        callback(coffee)
      }, 2000)
    }

    order(`아메리카노`, done);
    order(`라떼`, done);
    order(`에스프레소`, done);

    //펼침연산자(...변수명)
    //배열의 합
    let nums = [10,20,30,40,50,60,70];
    let total = 0;
    function sum3(x, y, ...etc){
      //합을 구하기
      // let result = x + y;
      // for(let idx = 0; idx < etc.length; idx++){
      //   result += etc[idx];
      // }
      for(let i = 2; i <= nums.length - 1; i++){
        total += etc[i];
      }
      //결과 리턴
      // return result;
      return x + y + total;
    }
    // console.log(`배열의 합 = ${sum3(...nums)}`);
    console.log(`배열의 합 = ${sum3(10, 20, ...nums)}`);


    //
    // var a = 1;
    // var b = 5;
    // function outfunc(){
    //   function innerfunc(){
    //     a = b;
    //   }
    //   console.log(a); // 1, a: 전역

    //   a=3;
    //   b=4;
    //   innerfunc();
    //   console.log(a); // 4, a: 전역
    //   var b = 2;
    //   console.log(b); // 2, b: 전역
    // }
    // outfunc();
    // console.log(b);


    //문제 2
    function sungjuk(name, kor, eng, math){
      let sum = kor + eng + math;
      let avg = parseInt(sum / 3);
      let grade = ``;


      switch(parseInt(avg / 10)){
        case 10 : 
        case 9 : grade = 'A';
        break;
        case 8 : grade = 'B';
        break;
        case 7 : grade = 'C';
        break;
        case 6 : grade = 'D';
        break;
        default: grade = 'F'
      }
      // return `${name}, ${sum}, ${avg}, ${grade}`;

      return `
      <tr>
        <td>${name}</td>
        <td>${sum}</td>
        <td>${avg}</td>
        <td>${grade}</td>
        </tr>
        `;
    }
    let sungjukTable =  `
    <table>
      <caption>성적표</caption>`;
      sungjukTable += `
      <tr>
        <th>이름</th>
        <th>총점</th>
        <th>평균</th>
        <th>등급</th>
      </tr>
      `
      sungjukTable += sungjuk('aaa', 70, 87, 67);
      sungjukTable += sungjuk('bbb', 80, 67, 97);
      sungjukTable += sungjuk('ccc', 60, 77, 87);
      sungjukTable += `</table>`;
      
      document.write(sungjukTable);
      // console.log(sungjuk('aaa', 80, 75, 90));
      // console.log(sungjuk('bbb', 90, 88, 99));
      // console.log(sungjuk('ccc', 100, 85, 94));
