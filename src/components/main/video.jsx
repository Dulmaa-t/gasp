import React from 'react'

export default function video(props) {
    return (
        <div class="youtube-video col-lg-6">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/4z2PyfaoiYk?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
                </div>
                <div class="video-text">
                    <h6>The World in2050: Future Technology</h6>
                    <div id="metadata-line" class="style-scope ytd-video-meta-block">
    
                        <span class="style-scope ytd-video-meta-block">13K views |</span>
                      
                        <span class="style-scope ytd-video-meta-block">8 months ago</span>
                      <dom-repeat strip-whitespace="" class="style-scope ytd-video-meta-block"><template is="dom-repeat"></template></dom-repeat>
                    </div>
                </div>
              </div>


    )
}
