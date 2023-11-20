
export default Array.from({ length: 16 }, (_, i) => ({
    id: i,
    orgName: `Organization ${i + 1}`,
    supportInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra libero ac.',
    domains: `https://www.example${i}.com`,
}))