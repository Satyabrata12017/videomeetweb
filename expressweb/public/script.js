const socket  = io('/')

const videoGrid = document.getElementById('video-grid');

const myVideo= document.createElement('video');
myVideo.muted=true;

var peer = new Peer(undefined,{
  
    host:'/',
    port:'3001'
}); 

let myVideoStream;

navigator.mediaDevices.getUserMedia({
    video : true,
    audio:true
}).then(stream =>{
    myVideoStream=stream;
    addVideoStream(myVideo,stream);

    peer.on('call', call => {
      call.answer(stream)
      const video = document.createElement('video')
      call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
      })
    })


    socket.on('user-connected',(userId)=>{
        connectToNewUser(userId);
    })
})


peer.on('open',id =>{
    socket.emit('join-room',ROOM_ID,id);
})


const connectToNewUser=(userId,stream) =>{
    console.log
    const call = peer.call(userId,stream);
    const video = document.createElement('video')
    call.on('stream',userVideoStream=>{
        addVideoStream(video,userVideoStream);
    })
    call.on('close',()=>{
      video.remove()
    })

    
}


const addVideoStream = (video,stream) =>{
    video.srcObject = stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
    })
    videoGrid.append(video);
}