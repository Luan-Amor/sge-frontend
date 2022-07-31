import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventService } from "../services/EventService";

export const NewEvent = () => {

    const [inputs, setInput] = useState({});
    const [video, setVideo] = useState({});
    const [videos, setVideos] = useState([]);
    const [isUpdateVideo, setIsUpdateVideo] = useState(false);
    const navigate = useNavigate();

    function addVideo() {
        if(!Object.keys(video).some(e => e === 'name')){
            alert('O preenchimento do nome é obrigatório')
            return
        }
        if(!Object.keys(video).some(e => e === 'url')){
            alert('O preenchimento da URL é obrigatório')
            return
        }
        let newArray = videos.slice();
        if(isUpdateVideo){
            let index = newArray.findIndex(e => e.name === video.name)
            newArray.splice(index, 1, video)
        }else{
            newArray.push(video);
        }
        setVideos(newArray)
        setVideo({})
        setIsUpdateVideo(false);
    }

    function removeVideo(index) {
        let newArray = videos.slice();
        newArray.splice(index, 1);
        setVideos(newArray)
    }

    function updateVideo(index) {
        setIsUpdateVideo(true);
        setVideo(videos[index])
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }

    function handleChangeVideo(event) {
        const name = event.target.name;
        const value = event.target.value;
        setVideo(values => ({...values, [name]: value}))
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setInput(inputs.videos = videos)

        try {
            await EventService.create(inputs);
        } catch (error) {
            if(error.response?.status === 401){
                navigate('/login', { replace: true })
            }
            if(error.response?.status === 400){
                console.log(error.response?.data);
            }
            console.log(error);
            
        }
    }

    return (
        <div className="container">
            <div className="container d-flex flex-column align-items-center justify-content-center p-5">

                <form onSubmit={handleSubmit} className="row g-2 w-75 border shadow p-2">
                    <h4 className="">Cadastra uma novo evento</h4>
                    <div className="col-md-12">
                        <label className="form-label">Nome</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={inputs.name || ""}
                            onChange={handleChange} required />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Orador</label>
                        <input type="text" className="form-control"
                            name="speaker"
                            value={inputs.speaker || ""}
                            onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Quantidade de vagas</label>
                        <input type="number" className="form-control" 
                            name="spots"
                            value={inputs.spots || ''}
                            onChange={handleChange} required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Valor do ingresso</label>
                        <input type="number" className="form-control" 
                            name="ticket_price"
                            value={inputs.ticket_price || 0}
                            onChange={handleChange} required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Data de início do evento</label>
                        <input type="datetime-local" className="form-control" 
                            name="start_event_date"
                            value={inputs.start_event_date || ''}
                            onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Data de fim do evento</label>
                        <input type="datetime-local" className="form-control"                             
                            name="end_event_date"
                            value={inputs.end_event_date || ''}
                            onChange={handleChange}/>
                    </div>
                    <div className="mb-3 col-12">
                        <label className="form-label">Descrição</label>
                        <textarea className="form-control" rows="3" 
                            name="description"
                            value={inputs.description || ''}
                            onChange={handleChange} />
                    </div>
                    <h4>Videos</h4>
                    <div className="col-md-6">
                        <label className="form-label">título</label>
                        <input type="text" className="form-control" 
                            name="name"
                            value={video.name || ""}
                            onChange={handleChangeVideo}/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">URL</label>
                        <input type="url" className="form-control" 
                            name="url"
                            value={video.url || ""}
                            onChange={handleChangeVideo}/>
                    </div>
                    <div className="mb-3 col-12">
                        <label  className="form-label">Descrição</label>
                        <textarea className="form-control" rows="3"
                            name="description"
                            value={video.description || ""}
                            onChange={handleChangeVideo}></textarea>
                    </div>
                    <div className="col-12">
                        <span className="btn btn-success" onClick={() => addVideo()}>{isUpdateVideo ? 'Atualizar' :'Adicionar'}</span>
                    </div>
                    <div className="accordion" id="accordionExample">
                        {
                            videos.map((e, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`} aria-expanded="true" aria-controls="collapseOne">
                                            <strong>{e.name}</strong>
                                        </button>
                                    </h2>
                                    <div id={`collapse-${index}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p><strong>URL: </strong> <a href={e.url} rel="noreferrer" target={"_blank"}>{e.url}</a></p>
                                            <p>{e.description}</p>                                            
                                            <span  className="btn btn-danger" onClick={() => removeVideo(index)}>Remover</span>
                                            <span  className="btn btn-primary m-1" onClick={() => updateVideo(index)} >Editar</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// name: string,
// description: string,
// url: string;

// name: string;
// description: string;
// speaker?: string;
// ticket_price?: number;
// spots?: number;
// owner_id: string;
// videos?: Video[];
// start_event_date?: Date;
// end_event_date?: Date;