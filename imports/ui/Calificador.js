import React, { Component } from 'react';
import { withTracker } from "meteor/react-meteor-data";
import { Students } from "../api/students.js";
import * as d3 from "d3";
//components
import Tweet from "./Tweet.js";
import AccountsUI from "./AccountsUI.js";


class Calificador extends Component {

	constructor(props){
		super(props);

		this.state={
			tweets:[],
			section1Count:0,
			section2Count:0
		}

		this.calificarTweet=this.calificarTweet.bind(this);
	}
	

	cargarHome(){
		// alert("regresando a pagina de estudiante");
		FlowRouter.go("/");
	}	

	//devuelve todos los tweets de la clase, es decir, los que tienen #WebDev @Uniandes
	darTweets(){
		Meteor.call('darTweets',(err,res) => {
      if(err) throw err;
      // console.log(">> Tweet data received");
      let tweets = res.statuses;
			if(this.props.students.length>0)
      	tweets.forEach((t)=>{
      		return t.seccion=this.encontrarSeccion(t.user.screen_name);
      	});
      this.setState({
      	tweets:tweets
      });
	  }); 
	}

	componentDidMount() {
		//Actualizar texto de login
		d3.select(".sign-in-text").text("Want to see student view? Sign out! ");

		//Actualizar tweets
		this.darTweets();
	}

	//A cada tweet se le debe pasar esta funcion, para que haga render
	calificarTweet(twitteruser, puntos, idTweet, posClase){
		//Agregar puntaje
		console.log("calificar Tweet de "+twitteruser+" con "+puntos+" puntos y en clase #"+posClase);
		//agregar id de tweet
		console.log("registrar id tweet: "+idTweet);
		Meteor.call("calificarTweet",twitteruser, puntos, idTweet, posClase);
	}

	encontrarSeccion(screen_name){
		let seccion = 0;
		let secciones = this.props.students.filter((s)=>{
			let comp = s.twitteruser===screen_name
			return comp;
		});
		if(secciones[0])
			seccion = secciones[0].seccion;
		return seccion;
	}

	//Verifica si el id de un tweet ya se ingresó a la DB
	yaCalificado(id_str){
		let calificado = false;
		this.props.students.forEach((s)=>{
			s.idtweets.forEach((id)=>{
				let comp = id===id_str;
				//Ya se califico, pues guardo el id
				if(id===id_str) calificado = true;
			})
		});
		return calificado;
	}

	tweetsFaltantes(seccion){
		return this.state.tweets
						//Solo si tiene seccion valida (eliminar cuentas raras)
						.filter((t)=>t.seccion>0)
						//Solo si no he calificado (comparar con idTweet de students)
						.filter((t)=>!this.yaCalificado(t.id_str))
						//Solo los de la seccion ingresada por parámetro
						.filter((t)=>t.seccion===seccion)
						.length;
	}

	render() {
		if(!this.props.currentUser)
			this.cargarHome();

		return (

			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <a className="navbar-brand" href="#home">
				  	<img style={{width: 30 , heigth:30 }} src="https://raw.githubusercontent.com/sneiderV/img/master/icon.png?token=AT1go0wclVL3_PujQYuMBX-DI3ng6c9iks5bCKTRwA%3D%3D" alt="tweetgrades" className="rounded-circle"/>
				  	TweetGrades
				  </a>
				  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
				    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
				      <li className="nav-item active">
				    	<a className="nav-link form-inline "> Want to see Student view? Sign out! <AccountsUI/> </a>
				      </li>
				    </ul>
				  </div>
				</nav>
<div className="container-fluid">
				<div className="row">

					{/*Aqui va la información*/}
					<div id="left-bar-calificador" className="col-4 bar-calificador card text-white bg-secondary mb-3"> 

						<div className="card text-white bg-dark mb-3">
							<div className="card-body">
								<h4> <span class="badge badge-light">Section 1</span>  (Tuesday and thursday):</h4>
								<p>You have <b><span class="badge badge-danger">{this.tweetsFaltantes(1)}</span></b> tweets left to grade</p>
								<div className="progress" style={{height: 20+"px"}}>
	  								<div className="progress-bar bg-success" role="progressbar" style={{ width: 100-(5*this.tweetsFaltantes(1))+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="25"> {100-(5*this.tweetsFaltantes(1))}%</div>
								</div><br/>
								<h4> <span class="badge badge-light">Section 2</span> (Monday and friday):</h4>
								<p>You have <b><span class="badge badge-danger">{this.tweetsFaltantes(2)}</span></b> tweets left to grade</p>
								<div className="progress" style={{height: 20+"px"}}>
	  								<div className="progress-bar bg-success" role="progressbar" style={{ width: 100-(5*this.tweetsFaltantes(2))+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="25"> {100-(5*this.tweetsFaltantes(2))}% </div>
								</div>
							</div>
						</div>

						<div className="card text-white bg-dark mb-3 ">
							<div className="card-header"><h4 className="card-title ">Grade your students: </h4></div>
							<center>
							<img  style={{width: 250 , heigth:260 }} src="https://raw.githubusercontent.com/sneiderV/img/master/img2.jpg?token=AT1gozR5ITpgJhzu1llEw_KRNzgLzyI8ks5bCJ3BwA%3D%3D" alt="Instructions card"/>
							</center>
							<div className="card-body">
								
								<div className="alert alert-success">Swipe right <b>(2 points)</b> if the tweet is interesting and original </div>
								<div className="alert alert-warning">Press and hold down <b>(1 point)</b> if the tweet is interesting but was said before</div>
								<div className="alert alert-danger">Swipe left <b>(0 points)</b> if the tweet is not interesting nor original </div>
								<div className="alert alert-secondary">If the student didn't tweet, (s)he gets <b>-1 points</b> by default</div>
							</div>
						</div>

						<br/><h5 class="font-italic" ><b>Remember to grade weekly or tweetGrades won't be able to show you missing tweets!</b></h5>
					</div>
	
					{/*Aqui va lo de hammer*/}
					<div id="right-bar-calificador" className="col-8 bar-calificador proof card ">
						<center>
							<div className="container">
								<h2 className="whiteT contentTA"> Grade the latest tweets!</h2> 
								<div className="row">
									<div className="card-columns">
										{this.state.tweets
											//Solo si tiene seccion valida (eliminar cuentas raras)
											.filter((t)=>t.seccion>0)
											//Solo si no he calificado (comparar con idTweet de students)
											.filter((t)=>!this.yaCalificado(t.id_str))
											//Le paso los params necesarios a los que quedan
											.map((t)=>(
												<div className="grow">
													<Tweet className="card"
														key={t.id_str} id_str={t.id_str} profile_image_url={t.user.profile_image_url} 
														twitteruser={t.user.screen_name} name={t.user.name} 
														created_at={t.created_at} text={t.text}
														urls={t.entities.urls} calificarTweet={this.calificarTweet}
														seccion={t.seccion}
														/>
												</div>
										))}	
									</div>
								</div>
							</div>
						</center>
					</div>
				</div>
</div>
			</div>
		);
	}
}

export default withTracker(()=>{
	//Se suscribe a la publicación de students
	Meteor.subscribe("students");

	return {
		students: Students.find({}, {sort: {createdAt: -1}}).fetch(),
		currentUser: Meteor.user()
	};

})(Calificador);
