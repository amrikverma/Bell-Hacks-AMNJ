import emailjs from '@emailjs/browser'

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8rvo9b9', 'template_k8qolbg', e.target, 'c_2qCBvKJ3ocqXu5x')
}