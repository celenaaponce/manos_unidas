import streamlit as st
from PIL import Image
from streamlit_extras.switch_page_button import switch_page
import streamlit.components.v1 as components
from pages.sidebars import login_sidebar_ASL1, set_styles
from st_pages import Page, Section,show_pages, add_page_title
from modules.nav import MenuButtons
st.markdown("""
    <style>
        div[data-testid="stSidebarNav"]{
            display: none !important;
        }
    </style>
    """, unsafe_allow_html=True)

def main():
        MenuButtons('ASL2')
        st.header("Bienvenido a la clase de ASL 2.")
        st.header("Se puede mirar nuestro curriculo aqui:")
        tab8, tab9 = st.tabs([":white[Colores]", ":white[Deletrear]"])

        with tab8:
            colores()
        with tab9:
             deletrear()
        
def colores():
    style_html = set_styles('#94387f')
    st.write(style_html, unsafe_allow_html=True)
    st.subheader('Lección 6: Colores')
    st.markdown("<h4 style='text-align: center; color: white;'><u>Videos</u></h4>", unsafe_allow_html=True)
    clms21 = st.columns([1,1])
    with clms21[0]:
        st.title('')
        st.markdown('<h5>Introduccion 🔇</h5>', unsafe_allow_html=True)
    with clms21[1]:
        st.video('https://youtu.be/WEhwFHOw6lI')
    clms23 = st.columns([1,1])
    with clms23[0]:
        st.title('')
        st.markdown('<h5>Repaso y Explicacion</h5>', unsafe_allow_html=True)
    with clms23[1]:
        st.video('https://youtu.be/sVyvzKH_Nsg')
    clms24 = st.columns([1,1])
    with clms24[0]:
        st.title('')
        st.markdown('<h5>Conversacion (sin subtitulos) 🔇</h5>', unsafe_allow_html=True)
    with clms24[1]:    
        st.video('https://youtu.be/h53mMpcm858')
    clms25 = st.columns([1,1])
    with clms25[0]:
        st.title('')
        st.markdown('<h5>Conversacion (con subtitulos) 🔈</h5>', unsafe_allow_html=True)
    with clms25[1]: 
        st.video('https://youtu.be/yX6p56ur8RI')
    clms26 = st.columns([1,1])
    with clms26[0]:
        st.title('')
        st.markdown('<h5>Cultura Sorda</h5>', unsafe_allow_html=True)
    with clms26[1]:
        st.video('https://youtu.be/LUPeVp1Kbwg')

    st.divider()

    st.markdown("<h4 style='text-align: center; color: white;'><u>Tarea</u></h4>", unsafe_allow_html=True)
    clms27 = st.columns([1,1])
    with clms27[0]:
        st.title('')
        st.markdown('<h5>Vocabulario para la semana que viene</h5>', unsafe_allow_html=True)
    with clms27[1]:
        st.video('https://youtu.be/tMqFbxcjx2o')
    clms28 = st.columns([1,1])
    with clms28[0]:
        st.title('')
        st.markdown('<h5>Practica</h5>', unsafe_allow_html=True)
    with clms28[1]:
        st.markdown("<a href='https://edpuzzle.com/media/6535ed2547faa53fdf53a7b9' target='_blank'><img style='float: left;' src='https://raw.githubusercontent.com/celenaaponce/sandbox/main/images/puzzle.png' width='100' height='100'/></a>", unsafe_allow_html=True)     
        st.markdown("<a href='https://edpuzzle.com/media/6535ed4ea59f3e4030d8a224' target='_blank'><img style='float: left;' src='https://raw.githubusercontent.com/celenaaponce/sandbox/main/images/puzzle.png' width='100' height='100'/></a>", unsafe_allow_html=True)     
        st.markdown("<a href='https://edpuzzle.com/media/6535f557ac44ed3fd6871438' target='_blank'><img style='float: left;' src='https://raw.githubusercontent.com/celenaaponce/sandbox/main/images/puzzle.png' width='100' height='100'/></a>", unsafe_allow_html=True)     

    st.divider()
            
    components.iframe("https://docs.google.com/presentation/d/e/2PACX-1vTuxyGaqhA7fkhYWE_DsmltguPNaigq0Mn0DwXDrkbtTKfpBU1Bmoyl941djFJc_QYSTe5lJBjsX119/embed?start=false&loop=false&delayms=3000", height=480)
    clms29 = st.columns([1,1])
    with clms29[0]:
        st.title('')
        st.markdown('<h5>Grabación de la Clase</h5>', unsafe_allow_html=True)
    with clms29[1]:
        st.video('https://youtu.be/5B2lkYSmGeI')
            
def deletrear():
    style_html = set_styles('#94387f')
    st.write(style_html, unsafe_allow_html=True)
    st.subheader('Lección 6: Deletrear')
    st.markdown("<h4 style='text-align: center; color: white;'><u>Videos</u></h4>", unsafe_allow_html=True)
    clms21 = st.columns([1,1])
    with clms21[0]:
        st.title('')
        st.markdown('<h5>Vocabulario </h5>', unsafe_allow_html=True)
    with clms21[1]:
        st.video('https://youtu.be/tMqFbxcjx2o')
    clms23 = st.columns([1,1])
    with clms23[0]:
        st.title('')
        st.markdown('<h5>Repaso y Explicacion</h5>', unsafe_allow_html=True)
    with clms23[1]:
        st.video('https://youtu.be/JrtFuHaFp90')
    clms24 = st.columns([1,1])
    with clms24[0]:
        st.title('')
        st.markdown('<h5>Entender Deletrear </h5>', unsafe_allow_html=True)
    with clms24[1]:    
        st.video('https://youtu.be/122DzyFbysE')
    clms25 = st.columns([1,1])
    with clms25[0]:
        st.title('')
        st.markdown('<h5>Cuento del Alfabeto</h5>', unsafe_allow_html=True)
    with clms25[1]: 
        st.video('https://youtu.be/G_clys0BzVM')
    clms26 = st.columns([1,1])
    with clms26[0]:
        st.title('')
        st.markdown('<h5>Gramatica</h5>', unsafe_allow_html=True)
    with clms26[1]:
        st.video('https://youtu.be/jDeJWEgCnF0')
    clms29 = st.columns([1,1])
    with clms29[0]:
        st.title('')
        st.markdown('<h5>Frases</h5>', unsafe_allow_html=True)
    with clms29[1]:
        st.video('https://youtu.be/0q9CCJWzFfU')
    clms30 = st.columns([1,1])
    with clms30[0]:
        st.title('')
        st.markdown('<h5>Cuento (sin subtitulos) 🔇</h5>', unsafe_allow_html=True)
    with clms30[1]:    
        st.video('https://youtu.be/VNnV8okNbP8')
    clms31 = st.columns([1,1])
    with clms31[0]:
        st.title('')
        st.markdown('<h5>Cuento (con subtitulos) 🔈</h5>', unsafe_allow_html=True)
    with clms31[1]: 
        st.video('https://youtu.be/P8IFhqRgEdI')        
    st.divider()

    st.markdown("<h4 style='text-align: center; color: white;'><u>Tarea</u></h4>", unsafe_allow_html=True)
    clms27 = st.columns([1,1])
    with clms27[0]:
        st.title('')
        st.markdown('<h5>Vocabulario para la semana que viene</h5>', unsafe_allow_html=True)
    with clms27[1]:
        st.video('https://youtu.be/4kpYIF-edx0')
    clms28 = st.columns([1,1])
    with clms28[0]:
        st.title('')
        st.markdown('<h5>Practica</h5>', unsafe_allow_html=True)
    with clms28[1]:
        st.markdown("<a href='https://edpuzzle.com/media/6561ba3bf53b4c415ee4ec79' target='_blank'><img style='float: left;' src='https://raw.githubusercontent.com/celenaaponce/mobile_practice/main/images/puzzle.png' width='100' height='100'/></a>", unsafe_allow_html=True)     
        st.markdown("<a href='https://edpuzzle.com/media/6561c188f996c941653fc5a0' target='_blank'><img style='float: left;' src='https://raw.githubusercontent.com/celenaaponce/mobile_practice/main/images/puzzle.png' width='100' height='100'/></a>", unsafe_allow_html=True)     

    st.divider()
            
    components.iframe("https://docs.google.com/presentation/d/e/2PACX-1vRfnMs2dLAf9T-nKujPNmVPA5LgeO7m0k1Keb-54XwM_JIvdVVr4n2CDiRiYdyZn1d3quto9EUmhPlI/embed?start=false&loop=false&delayms=3000", height=480)
    clms29 = st.columns([1,1])
    with clms29[0]:
        st.title('')
        st.markdown('<h5>Grabación de la Clase</h5>', unsafe_allow_html=True)
    with clms29[1]:
        st.video('https://youtu.be/DNb4qnIsi2Y')

main()
