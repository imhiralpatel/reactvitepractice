import style from './css/UserProfile.module.css'
import styled from 'styled-components';

function UserProfile(){
    
// const Heading =styled.h4`
// color:red;
// `

const Heading=styled.h1({
    color:'red',
    border:'1px solid #000'
})

    return(
        <>
            <div>

                <Heading>Styled Component</Heading>

                <h4 className={style.heading}>User Profile</h4>
                
                <div className={style.card}>
                    <img className={style.img} src="https://mrwallpaper.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" alt="" />

                    <div className={style.textwrap}>
                        <h4>
                            Hiral Patel
                        </h4>
                        <p>
                            Full Stack Developer
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;