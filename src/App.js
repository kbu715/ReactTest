//  import React, { Component } from 'react'; //React 라이브러리를 끌고온다 Component 상속관계이다

// class App extends Component {
//   render() {
//     return ( //return() 이 사이에서만 작업을 한다.
//       <>
//         <h1>호랑이</h1>
//         <h1>사자</h1>
//       </>
//     );
//   }
// }

// export default App; 





// import React, { Component, Fragment } from 'react'; //React 라이브러리를 끌고온다 Component 상속관계이다

// class App extends Component { //div대신 Fragment 쓸 수 있다.
//   render() {
//     return ( //return() 이 사이에서만 작업을 한다.
//       <Fragment>   
//         <h1> 호랑이</ h1> 
//         <h1>사자</h1>
//       </Fragment>      
//     );
//   }
// }
// //div는 개발자모드 Elements 상에 나타나지만, Fragment는 소스코드에 나타나지 않는다
// //나중에 다른 파일에 삽입하다보면 div가 너무 많아져서 이럴때 fragment를 사용한다.
// export default App;  




// import React, { Component } from 'react';

// class App extends Component {

//   render() {
//   //자바스크립트 영역
//   //주석1
//     let s = true;
//     let a = 10
//     let b = 20
//     console.log(a, b);

//     return (
//       // JSX 영역 
//       <div>
//         {/* <h1></h1> */}
//         {true?<h1>호랑이</h1>:<h1>꼬끼리</h1>}
//         {s?<h1>호랑이</h1>:<h1>코끼리</h1>}   
//         {/* if-else 쓸수없다 */}
//         {/* 스코프 열고닫고 사이에 작업하는 것을 표현식이라한다 */}

//         <h1>{s?"호랑이":"코끼리"}</h1> 

//       </div>
//       //<h1>태그에서 컨트롤 슬래쉬하게 되면 스코프 사이에 주석이 생긴다.
//     );
//   }
// }

// export default App; 








// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     let s = "호랑이"



//     return (

//       <div>
//         <h1>{s}</h1>
//       </div>
//     );
//   }
// }

// export default App;





// import './App.css';
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div className="My-CSS">
//         <h1>호랑이</h1>
//         <br/><br/><br/>
//         고양이
//         <Com1/>
//         <Com1/>
//         <Comp/>
//       </div> 
//     );
//   }
// }

// class Com1 extends Component {
//   render() {
//     return (
//       <div>
//         <h1>냥이</h1>
//       </div>
//     );
//   }
// }

// class Comp extends Component {
//   render() {
//     return (
//       <div>
//         <button>버튼</button>
//       </div>
//     );
//   }
// }


// export default App;







// import React, { Component } from 'react';
// import * as Orange from './orange'
// import Kiwi, { RedKiwi } from './kiwi' //컴포넌트 import
// import * as MyKiwi from './kiwi' //함수 import

// import Bpp from './bpp'

// function f1() {
//   console.log("f1");
// }
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={() => console.log(1)}>button1</button>
//         <br />
//         <button onClick={f1}>button2</button>
//         <br />
//         <button onClick={Orange.f2}>button3</button><br />
//         <button onClick={Orange.f3}>button4</button>
//         <Kiwi />
//         <RedKiwi />
//         <button onClick={MyKiwi.f4}>button5</button>

//         <Bpp />
//       </div>
//     );
//   }
// }
// export default App;







// import React, { Component } from 'react';

// export default class App extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }





// import React, { Component } from 'react';

// export default class App extends Component {

//   //클래스 멤버로 함수가 올때 fuction 키워드 붙이지 않는다.
//   //호출시에 () 붙히지 않는다.
//   //this. 를 이용해서 함수르 사용해야 한다
//   f1() {
//     console.log("f1");

//   }

//   //변수가 선언되니깐 let을 써야되는거 아닌가? 
//   //멤버변수 선언할땐 let 안붙혀도 된다.
//   f2 = function () {
//     console.log("f2");

//   } 


//   f3 = ()=>{
//     console.log("f3");

//   }


//   render() {

//     return (
//       <div>
//         <button onClick={()=>{console.log("클릭");}}>button1</button>

//         <button onClick={this.f1}>button2</button>

//         <button onClick={this.f2}>button3</button>

//         <button onClick={this.f3}>button4</button>
//       </div>
//     );
//   }
// }














// import React, { Component } from 'react';

// class App extends Component {

// f1 = () => {
//   console.log("클릭");

// }
// f2 = (num) => {
//   console.log(num);

// }

//   render() {
//     return (
//       <div>
//         <button onClick={this.f1}>button1</button>
//         <button onClick={()=>{this.f2(100)}}>button2</button>
//       </div>
//     );
//   }
// }

// export default App;

// //인수전달을 하고싶으면 람다식 안에서 함수콜을 시켜주면 된다.












// import React, { Component } from 'react';

// class Com2 extends Component {
//   //props //컴포넌트는 props라는 멤버를 이미 갖고있다.

//   render() {
//     console.log(this.props);

//     return (
//       <div>
//         <h1>{this.props.name}+{this.props.age}</h1>
//       </div>
//     );
//   }
// }



// class Com1 extends Component {
//   //숫자를 전달할때는 스코프 열고닫고를 이용한다.!!!
//   render() {
//     return (
//       <div>
//         <h1>호랑이</h1>
//         <Com2 name="호랑이" age={100}/>
//       </div>
//     );
//   }
// }

// export default Com1;






// import React, { Component } from 'react';




// class Com3 extends Component {
//   //props //컴포넌트는 props라는 멤버를 이미 갖고있다.
//   static defaultProps = {name:"코끼리", age:999}   //속성값을 안썼을때 //static defaultProps는 예약 키워드
//   render() {
//     let {name,age} = this.props //이런경우가 훨씬 더 많다.
//     console.log(name, age);


//     return (
//       <div>
//         <h1>{this.props.name} {this.props.age}</h1>
//       </div>
//     );
//   }
// }



// class Com2 extends Component {
//   //props //컴포넌트는 props라는 멤버를 이미 갖고있다.

//   render() {
//     let {name,age} = this.props //이런경우가 훨씬 더 많다.
//     console.log(name, age);


//     return (
//       <div>
//         <h1>{this.props.name} {this.props.age}</h1>
//         <h1>{name} {age}</h1>
//       </div>
//     );
//   }
// }



// class Com1 extends Component {
//   //숫자를 전달할때는 스코프 열고닫고를 이용한다.!!!
//   render() {
//     return (
//       <div>

//         <Com2 name="호랑이" age={100}/>
//         <Com3 /> 
//         <Com3 name="호랑이" age={100}/>
//       </div>
//     );
//   }
// }

// export default Com1;










// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Com1 age = {100}/>
//       </div>
//     );
//   }
// }

// // ** props 는 properties를 줄인말로 컴포넌트 속성을 설정할 때 사용하는 요소
// //1. props는 복사대입을 할 수 있다. - let {age} = this.props
// //2. props는 type 검증을 할 수 있다.
// //3. props는 필수속성을 설정 할 수 있다.
// //4. props는 읽기전용이다.



// class Com1 extends Component {
//   render() {
//     let {age} = this.props //<비구조화 할당>
//     age++;


//     //읽기전용이라 오류발생
//     //this.props.age++ 


//     return (
//       <div>
//         <h1>{age}</h1>
//         <h1>{this.props.age}</h1>
//       </div>
//     );
//   }
// }
// export default App;





// import React, { Component } from 'react';

// class Com extends Component {

//   obj = {
//     n1:10,
//     n2:10,
//   }
//   state = { //고정객체 오타나면 작동안됀다.
//     n1:10,
//     n2:10,
//   }
//   render() {

//     return (
//       <div>
//         <h1>{this.obj.n1}</h1>
//         <h1>{this.state.n1}</h1>
//       </div>
//     );
//   }
// }





// class App extends Component {


//   render() {
//     return (
//       <div>
//         <Com />
//       </div>
//     );
//   }
// }

// export default App;









// //안돼는 코드 먼저 보여준 거
// import React, { Component } from 'react';

// class App extends Component {
//   //컴포넌트 하나당 state가 하나씩 있다.
//   n1 = 100
//   state = {
//     n2:200,
//     n3:300,
//   }
//   f1 = () =>{
//     console.log(this.n1++)
//   }
//   //state 값은 직접 갱신 할 수 없습니다.
//   f2 = () =>{
//     console.log(this.state.n2++)
//   }
//   //setState 를 통해서 값을 갱신
//   //setState 사이에 인수를 요구하는데 객체를 요구한다. {}
//   f3 = () =>{
//     this.setState({ //비동기함수라서 실행순서대로 되는게 아니다
//       n3:this.state.n3+1 //n3가 여기서 갱신된다.
//     })
//     console.log(this.state.n3);

//   }
//   render() {
//     return (
//       <div>
//        <button onClick={this.f1}>{this.n1}</button> 
//        <button onClick={this.f2}>{this.state.n2}</button>
//        <button onClick={this.f3}>{this.state.n3}</button>
//       </div>
//     );
//   }
// }
// export default App;









// import React, { Component } from 'react';

// class Com extends Component {
//   state = {
//     name:"이승철",
//     age:25,
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name} {this.state.age}</h1>
//         <button onClick={() => { this.setState({
//             age: this.state.age+1 //++은 자기자신의 값이 바뀌기 떄문에 리프레시가 되지 않는다.
//             })
//           }
//         }>{this.state.age}</button>
//       </div>
//     );
//   }
// }



// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Com />

//       </div>
//     );
//   }
// }

// export default App;







// import React, { Component } from 'react';
// class Com extends Component {
//   state = {
//     name:"다크나이트",
//     age:300
//   }
//   render() {

//     return (
//       <div>
//         <hr/>
//         <button onClick={ ()=> {
//           this.setState({
//             age:this.state.age+1
//           })
//         }

//         }>{this.state.age}</button> 
//         <h1>{this.state.name}{this.state.age}</h1>   
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Com/>
//       </div>
//     );
//   }
// }

// export default App;










// import React, { Component } from 'react';

// class App extends Component {
//   f1 = (e) => {
//     console.log(1,e);
//     console.log(2,e.target);
//     console.log(3,e.target.value);


//   }
//   render() {

//     return (
//       <div>
//         <input type="text" onChange={this.f1}/>
//       </div>
//     );
//   }
// }

// export default App;








// import React, { Component } from 'react';


// class App extends Component {
//   state = {
//     msg:'호랑이',
//   }



//   f1 = (e) => {
//     console.log(1,e);
//     console.log(2,e.target);
//     console.log(3,e.target.value);
//     this.setState({msg:e.target.value})
//     console.log(4,this.state.msg)

//   }
//   render() {

//     return (
//       <div>
//         <input value={this.state.msg} type="text" onChange={this.f1}/>
//         <button onClick={()=>{this.setState({
//           msg:''
//         })}}>삭제</button>
//       </div>
//     );
//   }
// }

// export default App;
















// import React, { Component } from 'react';


// const Com8=(props)=>(

//   <div>
//     <h1>{props.name}</h1>
//   </div>
// );





// const Com7=(props)=>{

// return (
//   <div>
//     <h1>{props.name}</h1>
//   </div>
// );

// }


// function Com6(props) {

//   return (
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   );

// }



// class Com5 extends Component {
// render() {
//   return (
//     <div>
//       <h1>{this.props.name}</h1>
//     </div>
//   );
// }
// }





// const Com4 = () => (
//   <div>
//     <h1>호랑이4</h1>
//   </div>
// );


// //함수형 컴포넌트인데 람다식으로 썼다.
// const Com3 = () => {

// return (
//   <div>
//     <h1>호랑이3</h1>
//   </div>
// );

// }

// //함수형 컴포넌트 //state를 사용할 수 없다.
// function Com2() {

// return (
//   <div>
//     <h1>호랑이2</h1>
//   </div>
// );

// }

// //클래스형 컴포넌트!!! //state를 사용할 수 있다.
// class Com1 extends Component {
// render() {
//   return (
//     <div>
//       <h1>호랑이1</h1>
//     </div>
//   );
// }
// }

// // const App=()=>(
// //     <div>
// //       <Com1 />
// //       <Com2 />
// //       <Com3 />
// //       <Com4 />
// //       <Com5 name="호랑이5" />
// //       <Com6 name="호랑이6" />
// //       <Com7 name="호랑이7" />
// //       <Com8 name="호랑이8" />
// //     </div>
// //   );





// // const App=()=>{

// //   return (
// //     <div>
// //       <Com1 />
// //       <Com2 />
// //       <Com3 />
// //       <Com4 />
// //       <Com5 name="호랑이5" />
// //       <Com6 name="호랑이6" />
// //       <Com7 name="호랑이7" />
// //       <Com8 name="호랑이8" />
// //     </div>
// //   );

// // }

// // function App() {

// //     return (
// //       <div>
// //         <Com1 />
// //         <Com2 />
// //         <Com3 />
// //         <Com4 />
// //         <Com5 name="호랑이5" />
// //         <Com6 name="호랑이6" />
// //         <Com7 name="호랑이7" />
// //         <Com8 name="호랑이8" />
// //       </div>
// //     );

// // }
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Com1 />
//         <Com2 />
//         <Com3 />
//         <Com4 />
//         <Com5 name="호랑이5" />
//         <Com6 name="호랑이6" />
//         <Com7 name="호랑이7" />
//         <Com8 name="호랑이8" />
//       </div>
//     );
//   }
// }
// export default App;











// import React, { Component } from 'react';

// class App extends Component {
//   obj={a:10,b:20,c:30}
//   ar=[10,20,30]
//   render() {
//     let {a,b,c} = this.obj //비구조화 할당
//     console.log(this.obj.a, a);

//     let [d,e,f] = this.ar
//     console.log(d,e,f);

//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default App;





// import React, { Component, useState } from 'react';
// class Bpp extends Component {
//   state={
//     num:100,
//   }
//   f1 = ()=>{
//     this.setState({
//       num:this.state.num+1
//     })
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.f1}>{this.state.num}</button>
//       </div>
//     );
//   }
// }

// const Cpp=()=>{
//     const[num, setNum] = useState(100) //num은 변수고 setNum은 함수 //useState() 안에 초기값 설정
//     const[name, setName] = useState("호랑이")
//     const f1 = ()=>{
//         setNum(num+1)
//     } 
//     return (
//       <div>
//         <button onClick={f1}>{num}</button>
//       </div>
//     );

// }



// class App extends Component {

//   render() {
//     return (
//       <div>
//         <Bpp />
//         <Cpp />
//       </div>
//     );
//   }
// }

// export default App;






// //--------------------------------------------------------------------//
// //예제1 - this 한번 출려해봄
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     console.log(this);

//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default App;







// //예제 2번 - 멤버변수 추가
// import React, { Component } from 'react';

// class App extends Component {
//   num=10;
//   func=()=>{};
//   render() {
//     this.num2 = 20; // 문법적으로 문제가 없다. 즉시 멤버가 만들어진다.
//     console.log(this);

//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default App;





// //ref를 사용하는 방법 1

// import React, { Component } from 'react';

// class App extends Component {
//   num=10;
//   func=()=>{};
//   f1 = ()=>{ this.tiger.style.background = "red" }
//   render() {
//     this.num2 = 20; // 문법적으로 문제가 없다. 즉시 멤버가 만들어진다.
//     console.log(this);

//     return (
//       <div>
//         <button ref={ (t)=>{this.tiger=t} }>button1</button>   
//         <button onClick={this.f1}>button2</button>
//       </div>
//     );
//   }
// }

// export default App;

//t는 button을 나타낸다. this.tiger = t 라고 하면 객체에다가 tiger라는 속성에 button1을 넘기고 있는것이다.
//this.tiger을 이용해서 button1을 제어
//ref는 나를 사용하세요.. 나를 사용할 수 있는 방법을 만들어주고 만들어진 이름으로 사용할 수 있다.
//주의할것!!! : 남용하지 말것








// //ref를 사용하는 방법 2

// import React, { Component } from 'react';

// class App extends Component {
//   tiger = React.createRef(); //ref 생성
//   f1 = () => { 
//     console.log(React.version);

//     this.tiger.current.style.background = "red";
// }
//   //current를 사용해야한다.
//   render() {
//     return (
//       <div>
//         <button ref={this.tiger}>button1</button>
//         <button onClick={this.f1}>button2</button>
//       </div>
//     );
//   }
// }

// export default App;











// import React, { Component } from 'react';

// class App extends Component {

//   f1 = () => { 
//     this.tiger.focus();
// }
  
//   render() {
//     return (
//       <div>
//         <input ref={ (t)=>{this.tiger=t;} }></input>
//         <button onClick={this.f1}>button2</button>
//       </div>
//     );
//   }
// }

// export default App;








// import React, { Component } from 'react';

// class App extends Component {
//   tiger = React.createRef(); 

//   f1 = () => { 
//     this.tiger.current.focus();
// }

//   render() {
//     return (
//       <div>
//         <input ref={ this.tiger }></input>
//         <button onClick={this.f1}>button2</button>
//       </div>
//     );
//   }
// }

// export default App;







// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props){ 
//     super(props);
//     console.log(1); 
//   } //생성자


//   render() {
//     console.log(2);

//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default App;







// import React, { Component } from 'react';

// class Bpp extends Component {
//   f1 = () => { console.log("호랑이"); }
//   render() {
//     return (
//       <div>
//         <h1>호랑이</h1>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   f1 = () => { console.log("사자") }
//   render() {
//     return (
//       <div>
//       <button onClick={this.f1}>button</button>
//       <button onClick={()=>{this.tiger.f1();}}>button</button>

//       <Bpp ref={ (t)=>{this.tiger=t} } />
//       </div>
//     );
//   }
// }

// export default App;

// //갖다쓰는것이 아니라 함수를 콜해줘야한다.



// import React, { Component } from 'react';
// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <button onClick={100}></button> */}
//         <button onClick={()=>100}>100</button>
//         <button onClick={()=>{return 100}}>100</button>
//         </div>
//     );
//   }
// }
// export default App;






// import ReactDOMServer, { renderToStaticMarkup } from 'react-dom/server';
// //컴포넌트를 정적 마크업으로 렌더링할 수 있습니다. 
// import React, { Component } from 'react';
// class App extends Component {
//   f1 = () =>{
//     let ar = [1,2,3,4,5]
//     let br = ar.map(n=> n * 2)
//     console.log(ar);
//     console.log(br);
//     let cr = ['호랑이','코끼리','독수리']
//     let dr = cr.map((n)=> <li>{n}</li>)
//     console.log(dr);
//     let er = <h1>호랑이</h1>
//     let fr = [<h1>호랑이</h1>,<h1>코끼리</h1>,<h1>독수리</h1>]

//     console.log(ReactDOMServer.renderToStaticMarkup(er));
//     console.log(renderToStaticMarkup(fr)); //맨위에 import {renderToString} 해주었기 때문에 이렇게 쓸 수 있다
//     console.log(renderToStaticMarkup(dr));
//     return <ul>{dr}</ul>; 
//   }
//   render() {
//     return (
//       <div>
//        {this.f1()}
//       </div>
//     );
//   }
// }

// export default App;




// import React, { Component } from 'react';


// const Com1 = () => {
//   const names = ['눈사람', '얼음', '눈', '바람'];
//   const nameList = names.map(name => <li>{name}</li>);
//   console.log(nameList);

//   return <ul>{nameList}</ul>
// };



// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Com1 />
//       </div>
//     );
//   }
// }

// export default App;









// import React, { Component } from 'react';


// const Com1 = () => {
//   const names = ['눈사람', '얼음', '눈', '바람'];
//   const nameList = names.map((name, k) => { return <li key={k}>{name}</li> });
//   console.log(nameList);

//   return nameList
// };



// class App extends Component {
//   f1 = () => {
//     let ar = [10,20,30,40,50]
//     let br = ar.map( (n,k)=>{ 
//       console.log({n, k});
//       console.log({n});

//       return n; 
//     } );
//   }
//   render() {
//     return (
//       <div>
//         <ul><Com1 /></ul>
//         <button onClick={this.f1}>button1</button>
//       </div>
//     );
//   }
// }

// export default App;




// import React, { Component, useState } from 'react';
// class App extends Component {
//   f1 = () => {
//   }
//   render() {
//     return (
//       <div>
//         <Bpp />
//         <button onClick={this.f1}>button 1</button>
//       </div>
//     );
//   }
// }
// const Bpp = () => {
//   const [names] = useState([
//     { text: '눈사람' },
//     { text: '얼음' },
//     { text: '눈' },
//     { text: '바람' }
//   ])
//   const nameList = names.map(
//     (n, k) => {
//       return <li key={k}>{n.text}</li>
//     });
//   const f2 = () => {
//     for (const item of names) {
//       console.log(item.text);

//     }
//   }
//   return (
//     <div>
//       <button onClick={f2}>콘솔창</button>
//       <ul>{nameList}</ul>
//     </div>
//   )
// };
// export default App;









// import React, { Component, useState, useEffect } from 'react';
// class App extends Component {
//   f1 = () => {
//   }
//   render() {
//     return (
//       <div>
//         <Bpp />
//         <button onClick={this.f1}>button 1</button>
//       </div>
//     );
//   }
// }
// const Bpp = () => {
//   const [names, setNames] = useState([
//     { text: '눈사람' },
//     { text: '얼음' },
//     { text: '눈' },
//     { text: '바람' }
//   ])
//   const nameList = names.map(
//     (n, k) => {
//       return <li key={k}>{n.text}</li>
//     });

//   useEffect(()=>{ //useEffect 함수는 갱신이 일어나기만 하면 콜된다. 어디서쓰든 상관없다.(?)
//     for (const item of names) {
//       console.log(item);
//     }
//   })

//   const f2 = () => {

//     // setNames([
//     //   { text: '눈사람' },
//     //   { text: '얼음' },
//     //   { text: '눈' },
//     //   { text: '바람' },
//     //   { text: '독수리' },
//     // ])

//     setNames([
//       ...names, 
//       {text: '독수리'}
//     ]);


//     // for (const item of names) {
//     //   console.log(item.text);

//     // }
//     // console.log("--------------");

//     // names.push({ text: "독수리" });
//     // for (const item of names) {
//     //   console.log(item.text);
//     // }
//   }
//     return (
//       <div>
//         <button onClick={f2}>추가</button>
//         <ul>{nameList}</ul>
//       </div>
//   )
// };
// export default App;





// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [names, setNames] = useState([
//     { text: '호랑이' },
//     { text: '토끼' },
//     { text: '사자' },
//     { text: '거북이' },

//   ])
//   const nameList = names.map(
//     (n, k) => {
//       return <li key={k}>{n.text}</li>
//     }
//   )
//   useEffect(() => {
//     for (const item of names) {
//       console.log(item);

//     }
//   });
//   const f1 = () => {
//     setNames([
//       ...names,
//       { text: '돼지' },
//     ])


//   }
//   return (

//     <div>
//       <button onClick={f1}>add</button>
//       <ul>{nameList}</ul>
//     </div>
//   );
// };

// export default App;








// import React, { Component } from 'react';

// class App extends Component {
//   f1 = ()=>{
//     let ar=[5,6,7,8,9]
//     console.log(ar);

//     let br = ar.map((n)=>{
//       return n*n;
//     })
//     console.log(br);
    
//     let cr = ar.map((n,k)=>{
//       console.log({n,k});
      
//       return n*k;

//     })
//     console.log(cr);
//     let dr = ar.filter((n)=>{
//        // return n>=7
//        return n!==7
//     })
//     console.log(dr);

//     let er = ar.filter((n,k)=>{
//         return k!==3
//     })
//     console.log(er);
    
//     let fr = [3,4,5,6,7]
//     let gr = fr.reduce((acc,data)=>{ //실행해보고 어떻게 실행되는지 알자.. acc+data 한 값이 다시 acc에 저장된다.
//       console.log({acc, data});
      
//       return acc+data;
//     })
//     console.log(gr);
    
//   }
//   render() {
    
//     return (
//       <div>
//         <button onClick={this.f1}>button</button>
//       </div>
//     );
//   }
// }

// export default App;










// import React, { useState } from 'react';

// const App = () => {
//   const [names, setNames] = useState([
//     { text: '호랑이' },
//     { text: '토끼' },
//     { text: '사자' },
//     { text: '거북이' },

//   ])

//   const [inputText, setInputText] = useState('');

//   const nameList = names.map(
//     (n, k) => {
//       return <li key={k} onClick={() => { onRemove(k) }}>{n.text}</li>
//     }
//   )

//   const f1 = () => {

//     setNames([
//       ...names,
//       { text: inputText },
//     ])

//     setInputText('')
//     lion.current.focus()

//   }
//   const onRemove = (k) => {
//     const temp = names.filter((obj, index) => {

//       return index !== k
//     })

//     setNames(temp)
//   }

//   const onChange = (event) => {
//     setInputText(event.target.value)
//     // console.log(1);
//     //console.log(event.target.value); //내가 입력한게 그대로 출력되고 있다.
//   }

//   const lion = React.createRef()

//   return (

//     <div>
//       <input ref={lion} value={inputText} onChange={onChange}></input>
//       <button onClick={f1}>추가</button>
//       <ul>{nameList}</ul>
//     </div>
//   );
// };


// export default App;









// import React, { useState } from 'react';
// const App = () => {
//   const [names, setNames] = useState([
//     { text: '호랑이' },
//     { text: '고양이' },
//     { text: '돼지' },
//     { text: '강아지' },
//   ])
//   const [inputText, setInputText] = useState('')
//   const nameList = names.map(
//     (n, k) => {
//       return <li onClick={() => {
//         onRemove(k)
//       }} key={k}>{n.text}</li>
//     }
//   )
//   const onChange = (event) => {
//     //console.log(event.target.value);
//     setInputText(event.target.value)
//   }
//   const f1 = () => {
//     setNames([
//       ...names,
//       { text: inputText }
//     ])
//     lion.current.focus()
//     setInputText('')
//   }
//   const onRemove = (k) => {
//     const temp = names.filter((obj, index) => {
//       return index !== k
//     })
//     setNames(temp)
//   }
//   const lion = React.createRef()
//   return (
//     <div>
//       <input ref={lion} value={inputText} onChange={onChange}></input>
//       <button onClick={f1}>add</button>
//       <ul>{nameList}</ul>
//     </div>
//   );
// };
// export default App;







// import React, { useState } from 'react';

// const App = () => {
//   const [names, setNames] = useState([
//     { text: '맨유' },
//     { text: '토트넘' },
//     { text: '리버풀' },
//     { text: '맨시티' },
//   ])
//   const [inputText, setInputText] = useState('');

//   const nameList = names.map((n, k) => {
//     return <li onClick={()=>{ onRemove(k) }} key={k}>{n.text}</li>
//   })
//   const f1 = () => {
//       setNames([
//         ...names,
//         {text: inputText},
//       ])
//       setInputText('')
//       lion.current.focus()
//   }
//   const onChange = (event)=>{
//     setInputText(event.target.value)
//     // console.log(event.target.value);
  
//   }
//   const onRemove = (k)=>{
//       const temp = names.filter((obj,index)=>{
//         return index !== k
//       })
//       setNames(temp)
//   }
//   const lion = React.createRef();
//   return (
//     <div>
//       <input ref={lion} value={inputText} onChange={onChange}></input>
//       <button onClick={f1}>add</button>
//       <ul>{nameList}</ul>
//     </div>
//   );
// };

// export default App;











// import React, { useState } from 'react';

// const App = () => {
//   const [msg, setMsg] = useState('')
//   const tiger = React.createRef()
//   const setFocus = ()=>{
//     tiger.current.focus()
//     setMsg('')
//   }
//   const onChange=(event)=>{
//     setMsg(event.target.value)
//   }
//   return (
//     <div>
//       <input ref={tiger} value={msg} onChange={onChange}></input>
//       <button onClick={setFocus} >button</button>
      
//     </div>
//   );
// };


// export default App;



// const Bpp = () => {
//   const [names, setNames] = useState([
    
//   ])
//   const nameList = names.map((n,k)=>{
//       return <li key={k}>{n.text}</li>
//   })
//   const f1 = () => {
//     setNames([
//       ...names,
//       {text:'호랑이'},
//     ])
//   }
//   return (
//     <div>
//       <button onClick={f1}>호랑이나와라</button>
//       <ul>{nameList}</ul>
//     </div>
//   );
  
// };





// //3 :리스트가 있는데 리스트 클릭하면 삭제가 되버린다.


// const Cpp = () => {
//   const [names, setNames] = useState([
//     { text: '호랑이' },
//     { text: '호랑이' },
//     { text: '호랑이' },
//     { text: '호랑이' },
//     { text: '호랑이' },
//     { text: '호랑이' },
//     { text: '호랑이' },
//     { text: '호랑이' },
//   ])

//   const nameList = names.map((n, k) => {
//     return <li onClick={() => {
//       onRemove(n)
//     }} key={k}>{n.text}</li>
//   })

//   const onRemove = (n) => {
//     const temp = names.filter((obj) => {
//       return n !== obj
//     })
//     setNames(temp)
//   }

//   return (
//     <div>
//       <ul>{nameList}</ul>
//     </div>
//   );
// };








// import React, { useState } from 'react';
// const App = () => {


//   const [names, setNames] = useState([
//     { text: '호랑이' },
//     { text: '호랑이2' },
//     { text: '호랑이3' },
//     { text: '호랑이4' },
//   ]);


//   const nameList = names.map((n, k) => {
//     return <li key={k} onClick={() => { onRemove(n) }}>{n.text}</li>
//   })


//   const onRemove = (n) => {
//     const temp = names.filter((obj) => {
//       return n !== obj;
//     })
//     setNames(temp);
//   }


//   const onClick = () => {
//     setNames([
//       ...names,
//       { text: msg },
//     ]);
//     tiger.current.focus()
//     setMsg('')
//   }


//   const [msg, setMsg] = useState('')
  
  
//   // const[animal, setAnimal] = useState('');
  
//   const tiger = React.createRef()
  
  
//   const onChange = (event) => {
    
//     setMsg(event.target.value)
//   }


//   const animals = ['호랑이', '독수리','돼지','냥이','아지','사자','곰','비둘기']
//   const onClick2 = () => {
//     let index = parseInt(Math.random()*animals.length)
//     // setAnimal(animals[index])
//     setNames([
//       ...names,
//       { text: animals[index]},
//     ])
//     tiger.current.focus()
//     setMsg('')
//   }

//   return (
//     <div>

//       <input ref={tiger} value={msg} onChange={onChange}></input>
//       <button onClick={onClick}>Add</button>
//       <button onClick={onClick2}>simul</button>
//       <ul>{nameList}</ul>

//     </div>
//   );
// };
// export default App;






// import React, { useState } from 'react';

// const App = () => {

//   const [msg, setMsg] = useState('')

//   const onClick= ()=>{
//     const animals = ['호랑이', '독수리','돼지','냥이','아지','사자','곰','비둘기']
//     let index = parseInt(Math.random()*(animals.length))
//     setMsg(animals[index])
//     console.log(animals[index]);
    
//   }
//   return (
//     <div>
//       <input value={msg}></input>
//       <button onClick={onClick}>simul</button>
//     </div>
//   );
// };

// export default App;





// import React, { Component } from 'react';

// class LifeCycleSample extends Component {
//   state = {
//     number: 0,
//     color: null,
//   }

//   myRef = null; //ref를 설정할 부분

//   constructor(props) {
//     super(props);
//     console.log('constructor');

//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     console.log('getDerivedStateFromProps');
//     if (nextProps.color !== prevState.color) {
//       return { color: nextProps.color }
//     }
//     return null;

//   }

//   componentDidMount() {
//     console.log('componentDidMount');

//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate', nextProps, nextState);
//     //숫자의 마지막 자리가 4면 리렌더링 하지 않습니다.
//     return nextState.number % 10 !== 4;

//   }

//   componentWillMount() {
//     console.log('componentWillMount');

//   }

//   handleClick = () => {
//     this.setState({
//       number: this.state.number + 1
//     });
//   }

//   getSnapshotBeforeUpdate(prevProps, prevSt) {
//     console.log('getSnapshotBeforeUpdate');
//     if (prevProps.color !== this.props.color) {
//       return this.myRef.style.color;
//     }
//     return null;
//   }


//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('componentDidUpdate', prevProps, prevState);
//     if (snapshot) {
//       console.log('업데이트 되기 직전 색상 :', snapshot);

//     }
//   }


//   render() {
//     console.log('render');
//     const style = {
//       color: this.props.color
//     }

//     return (
//       <div>
//         <h1 style={style} ref={ref => this.myRef = ref} >{this.state.number}</h1>
//         <p>color: {this.state.color}</p>
//         <button onClick={this.handleClick}>더하기</button>
//       </div>
//     );
//   }
// }

// export default LifeCycleSample;



// import React, { useState } from 'react';
// //useState는 함수형 컴포넌트에서만 사용할 수있다.
// const App = () => {
//   const [n1] = useState(100)
//   const [n2,setN2] = useState(100)
//   const [s1, setS1] = useState('타이거')
//   const [ar1, setAr1] = useState([])
//   const [ar2, setAr2] = useState([10,20,30])
//   const [ar3, setAr3] = useState(['호랑이','코끼리','독수리'])
//   const [ar4, setAr4] = useState({age:10, name:'tiger'},{age:20, name:'lion'},{age:30, name:'eagle'})
  
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default App;




// import React, { useState } from 'react';

// const App = () => {
//   const [list, setList] = useState([10])
//   const f1 = ()=>{
//     setList(list)
//     // setList([...list,10])
//     let sum = 0;
//     for (const i of list) {
//       sum+=i;
//     }
//     console.log(sum);
    
//   }
//   //useMemo를 사용하면 데이타 갱신이되면 합산이 일어나고 갱신이 안돼면 합산코드가 실행안됀다.
//   //이건 useMemo를 사용안했다..
//   return (
//     <div>
//       <button onClick={f1}>button</button>
//     </div>
//   );
// };

// export default App;







// import React, { useState, useMemo } from 'react';

// const App = () => {

//   const [list, setList] = useState([10])

//   const f1 = () => {
//     setList(list)
//   }

//   const f2 = () => {
//     setList([...list, 10])
//   }


//   const f3 = () => {
//     setList([...list])
//   }
//   const f4 = () => {
//     let ar = [10,20]
//     let br = ar //ar과 br은 메모리를 같이 쓴다. br이 ar을 참조한다.
//     br[0] = 30
//     br[1] = 40
//     console.log(ar[0], ar[1]);
//     let cr = [10,20]
//     let dr = [...cr]
//     dr[0]=30
//     dr[1]=40
//     console.log(cr[0],cr[1]); //cr값이 그대로다. dr에는 새로운 객체가 저장된다.
    
    
//   }
//   //useMemo를 사용하면 데이타 갱신이되면 합산이 일어나고 갱신이 안돼면 합산코드가 실행안됀다.
//   //useMemo 인수 두개.. list에 변경이들어가면 첫번째 인수인 함수를 콜해라
//   //변경이 일어나면 useMemo가 실행된다.
//   //...cr은 새로운 객체로 만들어준다. // 데이타 자체가 갱신되었기때문에 이런경우에도 useMemo가 실행된다.
//   const sum = useMemo(() => {
//     console.log('useMemoCall');
    
//     let sum = 0;
//     for (const i of list) {
//       sum += i;
//     }
//     console.log(sum);
//     return sum;

//   }, [list])
//   return (
//     <div>
//       <button onClick={f1}>button1</button>
//       <button onClick={f2}>button2</button>
//       <button onClick={f3}>button3</button>
//       <button onClick={f4}>button4</button>
//       <h1>{sum}</h1>
//     </div>
//   );
// };

// export default App;




import React from 'react';
import Average from './Average';

const App = () => {
  return <Average />
};

export default App;





