import {Container, MainBox, AddANewPost, Publication, Post, Like} from "./style"
import axios from "axios"
import { useState, useEffect } from "react";

function Main(){

    const [dataPost, setDataPosts] = useState([])
    const [addPost, setAddPost] = useState()

    useEffect(() => {
        axios.get("http://localhost:5000/posts")
            .then(response => {
                setDataPosts(response.data)
            })
    }, [])


    const toPublic = () => {
        
        const publicObj = {
            username: "User001",
            photo: "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2Fd4ad40103067131.5f450dd53ccd1.png&f=1&nofb=1",
            post: `${addPost}`,
            likes: 0
        }
        dataPost.push(publicObj)
        setAddPost("")
    }

    return (
        <Container>
            <MainBox>
                <AddANewPost>
                    
                    <div className="infoPerfil">
                        <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2Fd4ad40103067131.5f450dd53ccd1.png&f=1&nofb=1" alt="Perfil Photo" />
                        <strong>User001</strong>
                    </div>

                    <textarea 
                        className="addNewPost"
                        placeholder="No que você esta pensado!"
                        onChange={e => setAddPost(e.target.value)}
                    ></textarea>

                    <div className="buttonBox">
                        
                        <button 
                            className="btnPostAdd"
                            onClick={toPublic}
                        >
                            Publicar
                        </button>

                    </div>

                </AddANewPost>

                <Publication>

                    {
                        dataPost.map(publications => {
                            return (
                              
                              <Post>

                                <div className="InfoImgPost">
                                  
                                  <div className="namaAndImgUserInfo">
                                    
                                    <img
                                      src={publications.photo}
                                      alt="Perfil Photo"
                                    />

                                    <strong>{publications.username}</strong>

                                  </div>

                                </div>

                                <div className="MainPost">
                                  
                                  <p>
                                    {publications.post}
                                  </p>

                                </div>

                                <div className="iconsOfPost">
                                  
                                  <Like />
                                  
                                  <span className="likes">{publications.likes}</span>
                                
                                </div>

                              </Post>
                              
                            )
                        })
                    }

                </Publication>
            </MainBox>
        </Container>
    )
}
export default Main