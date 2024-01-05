const Form = () => {
  return (
    <form className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">
          Nome
        </label>
        <input type="text" placeholder="Digite o seu nome" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">
          E-mail
        </label>
        <input type="email" placeholder="Digite o seu e-mail" />
      </div>
      <div className="flex flex-col">
        <a href="#">Ler os termos</a>
        <div>
          <input type="checkbox" />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos
          </label>
        </div>
      </div>
      <button>Cadastrar</button>
    </form>
  );
};

export default Form;
