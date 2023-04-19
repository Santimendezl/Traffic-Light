import React, {useState} from "react";


//create your first component
const Home = () => {
	const [ colorRojo, setColorRojo] = useState("bg-danger");
	const [ colorAmarillo, setColorAmarillo] = useState("bg-warning");
	const [ colorVerde, setColorVerde] = useState("bg-success");

	function cambiarColorRojo(){
		setColorRojo("bg-secondary");
		setColorAmarillo("bg-warning");
		setColorVerde("bg-success");
	}
	function cambiarColorAmarillo(){
		setColorAmarillo("bg-secondary");
		setColorRojo ("bg-danger");
		setColorVerde ("bg-success");
	}
	function cambiarColorVerde(){
		setColorVerde("bg-secondary");
		setColorAmarillo("bg-warning");
		setColorRojo ("bg-danger");
	}

	return (
		<div className=" d-flex flex-column text-center bg-dark" style={{height:'100px',width:'20px'}}>
			<div className="bg-dark">
				<button className={"btn rounded-circle "+ colorRojo}  onClick={cambiarColorRojo} style={{height:'100px',width:'100px'}}></button>
				<button className={"btn rounded-circle "+ colorAmarillo} onClick={cambiarColorAmarillo} style={{height:'100px',width:'100px'}}></button>
				<button className={"btn rounded-circle "+ colorVerde} onClick={cambiarColorVerde} style={{height:'100px',width:'100px'}}></button>
			</div> 
		</div> 
	);
};

export default Home;
