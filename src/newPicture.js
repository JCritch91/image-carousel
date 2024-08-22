function newPicture(id, url, position){

    class createPicture {
        constructor(
            id, 
            url,
            position
        ){
            this.id = id
            this.url = url
            this.position = position
        }
    }

    const newPic = new createPicture( 
        id,
        url,
        position
    )

    return newPic
}



function createDemoPictures(pictureArray){
    pictureArray.push(
        newPicture(
            '0', 
            'https://plus.unsplash.com/premium_photo-1686090450479-370d5ddf4de1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            '0'
        ),

        newPicture(
            '1',
            'https://images.unsplash.com/photo-1724232547374-69758574fff5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            '1'
        ),

        newPicture(
            '2',
            'https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            '2'
        ),

        newPicture(
            '3',
            'https://images.unsplash.com/photo-1720048169970-9c651cf17ccd?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            '3'
        ),

        newPicture(
            '4',
            'https://images.unsplash.com/photo-1724150067801-b8db11d8ecf0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            '4'
        )
    )
}

export { newPicture, createDemoPictures }