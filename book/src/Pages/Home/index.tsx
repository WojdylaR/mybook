import HelloStyle from '../../Style/HelloStyle'
import Hello from '../../Component/Hello/Hello'
import Profil from '../../Component/Profil/Profil'
import Project from '../../Component/Project/Project'
import Contact from '../../Component/Contact/Contact'

function Home() {
    return (
        <div>
            <Hello />
            <Profil />
            <Project />
            <Contact />
        </div>
    )
}

export default Home