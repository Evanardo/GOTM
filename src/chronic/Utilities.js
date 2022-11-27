export function formatConsoles(list, separtor = "|") {
    return list?.map(
    (platform, index) => `${platform.platform.name}${index < list.lenth -1 ? separtor: ""}`,
    );
}

