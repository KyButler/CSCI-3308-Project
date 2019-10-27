import React, { useState } from 'react';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  return (
    <div className=".container-fluid" style={{height: '100%'}}>
        <div className="row no-pad">
            <div className="col-2">
                <div className="left">
                    <div className="channelList">
                        <table className="table">
                            <thead>
                                <tr><h1>Channels</h1></tr>
                            </thead>
                            <tbody style={{textAlign:'left'}}>
                                <tr>
                                    <td># Channel 1</td>
                                </tr>
                                <tr>
                                    <td># Channel 2</td>
                                </tr>
                                <tr>
                                    <td># Channel 3</td>
                                </tr>
                                <tr>
                                    <td># Channel 4</td>
                                </tr>
                                <tr>
                                    <td># Channel 1</td>
                                </tr>
                                <tr>
                                    <td># Channel 2</td>
                                </tr>
                                <tr>
                                    <td># Channel 3</td>
                                </tr>
                                <tr>
                                    <td># Channel 4</td>
                                </tr>
                                <tr>
                                    <td># Channel 1</td>
                                </tr>
                                <tr>
                                    <td># Channel 2</td>
                                </tr>
                                <tr>
                                    <td># Channel 3</td>
                                </tr>
                                <tr>
                                    <td># Channel 4</td>
                                </tr>
                                <tr>
                                    <td># Channel 1</td>
                                </tr>
                                <tr>
                                    <td># Channel 2</td>
                                </tr>
                                <tr>
                                    <td># Channel 3</td>
                                </tr>
                                <tr>
                                    <td># Channel 4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="userInfo">
                        <div className="row no-pad">
                            <div className="col-10">
                                <img src="images/lilyTransparent.png" width="50px" height="50px" />Username
                            </div>
                            <div className="col-2">
                                <div><img src="images/gearCog.png" width="40px" height="40px"/> </div>
                                <div> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-8">
                <div className="messages">
                  {messages.map((message, i) => (
                    <li key={i} className="list-group-item">
                      {message}
                    </li>
                  ))}
                </div>
                <div className="textEntry">
                    <form style={{paddingTop:'30px'}}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="textEntryBox" autofocus="autofocus" onKeyPress={e => {if (e.which == 13) {e.preventDefault(); setMessages([...messages, e.target.value]); e.target.value = ""}}} placeholder="Enter message . . . "/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-2">
                <div className="right">
                    <table className="table">
                        <thead>
                            <tr><h1>Online Users</h1></tr>
                        </thead>
                        <tbody style={{textAlign:'left'}}>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 1</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 2</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 3</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 4</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 1</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 2</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 3</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 4</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 1</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 2</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 3</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 4</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 4</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 1</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 2</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 3</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 4</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 4</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 1</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 2</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 3</td>
                            </tr>
                            <tr>
                                <td><img src="images/lilyTransparent.png" width="50px" height="50px" /># User 4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Chat;
