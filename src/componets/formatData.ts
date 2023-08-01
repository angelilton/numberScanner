
export default function format(type:string, value:string) {
  if (type === 'cnpj') {
    return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
  }
  if (type === 'chave') {
    //@ts-ignore
      return value.match(new RegExp('.{1,4}', 'g')).join(' ');
  }

  if (type === 'valor') {
     return Number(value).toLocaleString('pt-br', {
       maximumFractionDigits: 2,
       minimumFractionDigits: 2,
     });
  }
}
