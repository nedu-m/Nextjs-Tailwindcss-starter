type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};

export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = 'https://og.<yourdomain>.com/images/logo.jpg',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.<yourdomain>.com/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

// export function openGraph(router: any) {
//   const { pathname, asPath, query } = router;
//   const { title, description, image } = query;
//   const url = asPath ? asPath : pathname;
//   const og = {
//     url,
//     title,
//     description,
//     image,
//   };
//   return og;
// }
