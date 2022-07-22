function truncateString(str: string, maxLength: number ): string {
    return str.length > maxLength ? str.substr(0, maxLength - 3) + '...' : str;
}

export default truncateString;