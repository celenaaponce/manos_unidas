// export default async function fetchData(theme, cursor = null) {

//   let url;

//   url = theme
//     ? `/ASL/Diccionario/DictTheme/api/fetchTheme?filter=${theme}`
//     : "/ASL/Diccionario/DictTheme/api/fetchTheme";
//   url = cursor
//     ? `/ASL/Diccionario/DictTheme/api/fetchTheme?next_cursor=${cursor}&filter=${theme}`
//     : url;

//   // console.log(url)
//   // const { searchParams } = new URL(url);
//   const filteredTheme = theme;
//   const nextCursor = cursor;
//   let response;
//   const queryOptions = {
//     database_id: "543e49d42d6f4443acd16eaa4a51d922",
//     sorts: [{ property: "Word", direction: "ascending" }],
//   };
//   if (filteredTheme.includes(",")) {
//     const themes = filteredTheme.split(", ");
//     queryOptions.filter = {
//       or: themes.map((theme) => ({
//         property: "Themes",
//         multi_select: {
//           contains: theme,
//         },
//       })),
//     };
//     if (!nextCursor) {
//       console.log('if', queryOptions)
//       response = await fetch(queryOptions);
//       const data = await response.json();
//       return data
//     }else {
//       queryOptions.start_cursor = queryOptions.start_cursor = nextCursor;
//       console.log('else', queryOptions)
//       response = await fetch(queryOptions)
//       const data = await response.json()
//       return data
//     }
//   }
//   if (nextCursor) {
//     queryOptions.start_cursor = queryOptions.start_cursor = nextCursor;
//     queryOptions.filter = queryOptions.filter = {
//       property: "Themes",
//       multi_select: {
//         contains: theme,
//       },
//     };
//     console.log('if next', queryOptions)
//     response = await fetch(queryOptions)
//     const data = await response.json()
//     return data;
//   } else if (filteredTheme) {
//     queryOptions.filter = queryOptions.filter = {
//       property: "Themes",
//       multi_select: {
//         contains: filteredTheme,
//       },
//     };
//     console.log('elseif', queryOptions)
//     response = await fetch(queryOptions);
//     const data = await response.json()
//     return data;
//   }

// }

export default async function fetchData(theme, cursor = null) {
  const headers = new Headers();
  if (theme) headers.set('x-filter', theme);
  if (cursor) headers.set('x-next-cursor', cursor);

  try {
    const response = await fetch('/ASL/Diccionario/DictTheme/api/fetchTheme', { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

