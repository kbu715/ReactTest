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





import React, { Component, useState } from 'react';
class Bpp extends Component {
  state={
    num:100,
  }
  f1 = ()=>{
    this.setState({
      num:this.state.num+1
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.f1}>{this.state.num}</button>
      </div>
    );
  }
}

const Cpp=()=>{
    const[num, setNum] = useState(100) //num은 변수고 setNum은 함수 //useState() 안에 초기값 설정
    const[name, setName] = useState("호랑이")
    const f1 = ()=>{
        setNum(num+1)
    } 
    return (
      <div>
        <button onClick={f1}>{num}</button>
      </div>
    );
  
}



class App extends Component {
  
  render() {
    return (
      <div>
        <Bpp />
        <Cpp />
      </div>
    );
  }
}

export default App;