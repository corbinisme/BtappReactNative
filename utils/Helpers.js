export function getDataForSwiper(dat, included, name){
    let data = [];
    let baseUrl = "https://cas-development.ucg.org/";
    //console.log("getDataForSwiper", dat, included, name)
    
    dat.map(p=>{

            const featuredImageId = (p.relationships.field_featured_image.data? p.relationships.field_featured_image.data.id: null);
            //console.log("featuredImageId", featuredImageId);
            let featuredImageSrc = null;
            let alt = null;
            let nodeID = p.attributes.drupal_internal__nid;
            let readTime = p.attributes.node_read_time;
            let summary = p.attributes.field_summary.value;
            let title = (p.attributes.title?p.attributes.title: "");
            let remoteVideoId = p.relationships.field_video? p.relationships.field_video.data.id: null;
            let remoteVideoSrc = null;
            if(remoteVideoId){
                let findMedia = included.filter(i=>i.id==remoteVideoId);
                let targetNode = findMedia[0].attributes.field_media_oembed_video;
                remoteVideoSrc = targetNode;
            }
           //console.log("featured", featuredImageId)
            if(featuredImageId && name!=="MAGNIFIED"){
                let findMedia = included.filter(i=>i.id==featuredImageId);
                if(findMedia.length){
                    //console.log("findMedia", findMedia)
                    let relatedImageObj = findMedia[0].relationships.field_media_image;
                    let fileId = relatedImageObj.data.id;
                    //console.log("fileId", fileId)
                    let findFile = included.filter(i=>i.id==fileId);

                    if(findFile.length){
                        
                        let uri = findFile[0].attributes.uri.url;
                        alt = findFile[0].attributes.alt;
                        let thumb = findFile[0].attributes.image_style_uri.fp_square_256;
                        thumb = thumb.substring(thumb.indexOf("/sites"), thumb.length);
                        featuredImageSrc = thumb;
                        // replace image style if BT
                        if(name=="bttv")
                        featuredImageSrc = featuredImageSrc.replace("fp_square_256", "fp_widescreen_1200x675");
                    
                    }
                    
                }
                
            } else {
                // check remote video
                if(remoteVideoId){
                    let findMedia = included.filter(i=>i.id==remoteVideoId);
                    let targetNode = findMedia[0].attributes.field_media_oembed_video;
                    let ytid = targetNode.substring(targetNode.indexOf("watch?v=")+8, targetNode.length);
                    featuredImageSrc = "https://i.ytimg.com/vi/"+ytid+"/mqdefault.jpg";
                }
            }
            let temp = {
                id: nodeID,
                title: title,
                summary: summary,
                readTime: readTime,
                featuredImageSrc: (featuredImageSrc? (featuredImageSrc.indexOf("http")>-1? "": baseUrl) + featuredImageSrc : null),
                alt: alt,
                remoteVideoSrc: remoteVideoSrc,
                uri: baseUrl + "node/" + p.attributes.drupal_internal__nid
            }
            data.push(temp);
        }
            
    );

    return data;
    
}