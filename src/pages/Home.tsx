import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';



export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q $$amp A ao-vivo </strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src="logoImg" alt="Letmeask" />
                    <button>
                        <img src="googleIconImg" alt="Loho do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div>ou entre em uma sala</div>
                </div>
                <form>
                    <input
                        type="text"
                        placeholder="Digite o codigo da sala"
                    />
                    <button type="submit">
                        Entrar na sala
                    </button>

                </form>
            </main>





        </div>


    )


}