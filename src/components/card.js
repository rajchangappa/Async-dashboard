const card = (data, container) => {
  console.log("Rendering cards...", data);
  data.forEach((movie) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add(
      "card",
      "flex",
      "min-w-0",
      "flex-col",
      "overflow-hidden",
      "rounded-xl",
      "border",
      "cursor-pointer",
      "border-white/10",
      "bg-[#1a1a1a]",
      "transition",
      "duration-200",
      "hover:-translate-y-1",
      "hover:border-orange-500/40",
      "hover:bg-[#202020]",
      "shadown-lg",
      "hover:shadow-orange-500/20",
    );

    cardElement.innerHTML = `
      <div class="w-full h-[240px] bg-gray-100">
        <img src="${movie.image}" alt="${movie.title}" class="h-full w-full object-cover" />
      </div>

      <div class="w-full flex flex-col gap-3 p-2">
      <h2 class="text-xl leading-snug font-semibold tracking-tight text-gray-100">${movie.title}</h2>
      <div class="flex flex-col gap-1">
        <p class="text-sm leading-6 text-stone-300"><strong class="mr-1 font-medium text-stone-500">Director:</strong> ${movie.director}</p>
        <p class="text-sm leading-6 text-stone-300"><strong class="mr-1 font-medium text-stone-500">Producer:</strong> ${movie.producer}</p>
        <p class="text-sm leading-6 text-stone-300"><strong class="mr-1 font-medium text-stone-500">Release Date:</strong> ${movie.release_date}</p>
      </div>
        <p class="flex-1 border-t border-white/10 pt-4 text-sm leading-6 text-stone-400"><strong class="font-medium text-stone-500">Description:</strong> ${movie.description.slice(0, 150)}...</p>
      </div>
    `;

    container.appendChild(cardElement);
  });
};

export default card;
