import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.join(__dirname, '..', 'public', 'assets', 'icons');
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'assets', 'images');

async function ensureDirectoryExists(directory) {
  try {
    await fs.access(directory);
  } catch {
    await fs.mkdir(directory, { recursive: true });
  }
}

async function generateIcons() {
  await ensureDirectoryExists(ICONS_DIR);
  await ensureDirectoryExists(IMAGES_DIR);

  const svgBuffer = await fs.readFile(path.join(ICONS_DIR, 'logo.svg'));

  // Generate PNG favicons
  const sizes = [16, 32, 70, 150, 180, 192, 310, 512];
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(ICONS_DIR, `favicon-${size}x${size}.png`));
  }

  // Generate special Microsoft tiles
  await sharp(svgBuffer)
    .resize(310, 150)
    .png()
    .toFile(path.join(ICONS_DIR, 'mstile-310x150.png'));

  // Rename some files to match the expected names
  const renames = [
    ['favicon-180x180.png', 'apple-touch-icon.png'],
    ['favicon-192x192.png', 'android-chrome-192x192.png'],
    ['favicon-512x512.png', 'android-chrome-512x512.png'],
    ['favicon-70x70.png', 'mstile-70x70.png'],
    ['favicon-150x150.png', 'mstile-150x150.png'],
    ['favicon-310x310.png', 'mstile-310x310.png'],
  ];

  for (const [oldName, newName] of renames) {
    await fs.rename(
      path.join(ICONS_DIR, oldName),
      path.join(ICONS_DIR, newName)
    );
  }

  // Generate maskable icons for Android
  for (const size of [192, 512]) {
    await sharp(svgBuffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 102, b: 204, alpha: 1 } // #0066CC
      })
      .png()
      .toFile(path.join(ICONS_DIR, `android-chrome-maskable-${size}x${size}.png`));
  }

  // Generate favicon.ico (multi-size)
  const favicons = await Promise.all([16, 32, 48].map(size => 
    sharp(svgBuffer)
      .resize(size, size)
      .toBuffer()
  ));

  await sharp(favicons[0])
    .toFile(path.join(ICONS_DIR, 'favicon.ico'));

  // Generate OG Image
  const ogImage = sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  });

  // Add logo and text to OG image
  await sharp(svgBuffer)
    .resize(200, 200)
    .toBuffer()
    .then(async (logoBuffer) => {
      await ogImage
        .composite([
          {
            input: logoBuffer,
            top: 215,
            left: 500
          }
        ])
        .png()
        .toFile(path.join(IMAGES_DIR, 'og-image.jpg'));
    });

  // Generate Twitter Card
  await sharp(path.join(IMAGES_DIR, 'og-image.jpg'))
    .resize(1200, 600)
    .toFile(path.join(IMAGES_DIR, 'twitter-card.jpg'));

  console.log('All icons and images generated successfully!');
}

generateIcons().catch(console.error); 