export async function GET(request: Request) {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const componentToHEX = (component: number) => {
    let value = component.toString(16);
    return value.length == 1 ? '0' + value : value;
  }

  const hex = componentToHEX(r) + componentToHEX(g) + componentToHEX(b);

  {
    return new Response(
      JSON.stringify(
      {
        'r': r,
        'g': g,
        'b': b,
        'hex': '#' + hex,
        'dec': Number.isNaN(parseInt(hex, 16)) ? 0 : parseInt(hex, 16)
      }
      )
    );
  }
}
