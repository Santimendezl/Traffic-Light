import React, {useState} from "react";


//create your first component
const Home = () => {
	const [ colorRojo, setColorRojo] = useState("bg-danger bg-opacity-50");
	const [ colorAmarillo, setColorAmarillo] = useState("bg-warning bg-opacity-50");
	const [ colorVerde, setColorVerde] = useState("bg-success bg-opacity-50");

	function cambiarColorRojo(){
		setColorRojo("bg-danger");
		setColorAmarillo("bg-warning bg-opacity-50");
		setColorVerde("bg-success bg-opacity-50");
	}
	function cambiarColorAmarillo(){
		setColorAmarillo("bg-warning");
		setColorRojo ("bg-danger bg-opacity-50");
		setColorVerde ("bg-success bg-opacity-50");
	}
	function cambiarColorVerde(){
		setColorVerde("bg-success");
		setColorAmarillo("bg-warning bg-opacity-50");
		setColorRojo ("bg-danger bg-opacity-50");
	}

	return (
		<>
		<div className="container text-center bg-dark" style={{height:100,width:20}}></div> 
		<div className="container text-center d-flex flex-column bg-dark align-items-center rounded justify-content-around" style={{height:400,width:150}}>
			<div className={"rounded-circle"}><button type="button" className={"btn rounded-circle "+ colorRojo}  onClick={cambiarColorRojo} style={{height:'100px',width:'100px'}}></button></div>
			<div><button type="button" className={"btn rounded-circle "+ colorAmarillo} onClick={cambiarColorAmarillo} style={{height:'100px',width:'100px'}}></button></div>
			<div><button type="button" className={"btn rounded-circle "+ colorVerde} onClick={cambiarColorVerde} style={{height:'100px',width:'100px'}}></button></div>
		</div> 
		
		</>
	);
};

export default Home;
