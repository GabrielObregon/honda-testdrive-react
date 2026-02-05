// src/components/FAQ.jsx
import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [perguntaAberta, setPerguntaAberta] = useState(null);

  const faqs = [
    {
      pergunta: "Preciso ter CNH para agendar test ride?",
      resposta:
        "Sim, é necessário apresentar CNH válida na concessionária no dia do test ride.",
    },
    {
      pergunta: "Qual a idade mínima para test ride?",
      resposta:
        "A idade mínima é 18 anos e o candidato deve ter habilitação válida para a categoria da moto.",
    },
    {
      pergunta: "Posso agendar test ride para fins de aprendizado?",
      resposta:
        "Não, o test ride é exclusivo para potenciais compradores que já tenham experiência.",
    },
    {
      pergunta: "O test ride tem custo?",
      resposta:
        "Não, o test ride é gratuito e realizado mediante agendamento prévio.",
    },
    {
      pergunta: "Posso levar um acompanhante?",
      resposta:
        "Sim, você pode levar um acompanhante, mas apenas o agendado poderá pilotar.",
    },
  ];

  const togglePergunta = (index) => {
    setPerguntaAberta(perguntaAberta === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <h2>FAQ</h2>
      <p className="subtitulo">Dúvidas frequentes</p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-pergunta ${perguntaAberta === index ? "aberta" : ""}`}
              onClick={() => togglePergunta(index)}
            >
              {faq.pergunta}
              <span className="faq-icone">
                {perguntaAberta === index ? "−" : "+"}
              </span>
            </button>

            {perguntaAberta === index && (
              <div className="faq-resposta">
                <p>{faq.resposta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
