import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Pointer } from 'lucide-react';

const testimonial = {
    quote: 'Compromiso con la excelencia académica',
    author: 'María Pérez',
    role: 'Decano',
    company: 'Universidad Nacional de San Juan',
    avatars: [
        {
            image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
            fallback: 'MP',
        },
        {
            image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
            fallback: 'CD',
        },
        {
            image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
            fallback: 'EF',
        },
    ],
};

const images = {
    first: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
    second: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg',
    third: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg',
    fourth: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg',
};

export default function Hero() {
    return (
        <section className="relative h-dvh py-12 md:py-20">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #d1d5db 1px, transparent 1px),
                        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
                    `,
                    backgroundSize: '48px 48px',
                    WebkitMaskImage:
                        'radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)',
                    maskImage:
                        'radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)',
                }}
            />
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-8 md:flex-row">
                    <div className="flex-1">
                        <div className="flex flex-col gap-4 lg:gap-8">
                            <h1 className="text-foreground max-w-[80%] text-4xl leading-tight font-semibold text-balance lg:text-5xl xl:text-6xl">
                                Bienvenidos a la Facultad de Ciencias Exactas, Físicas y Naturales
                                UNSJ
                            </h1>
                            <p className="text-muted-foreground text-lg leading-relaxed text-balance xl:text-2xl">
                                Explora nuestros programas académicos y descubre tu futuro en la
                                ciencia.
                            </p>
                        </div>
                        <div className="my-6 lg:my-10">
                            <Button asChild size="lg">
                                <a href="#">
                                    Ingreso 2026 <Pointer className="ml-2" />
                                </a>
                            </Button>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="relative flex -space-x-[1.5rem]">
                                {testimonial.avatars.map((avatar, index) => (
                                    <Avatar
                                        key={index}
                                        className={`relative z-${
                                            index + 1
                                        }0 flex h-12 w-12 shrink-0 rounded-full border-2 border-white object-cover`}>
                                        <AvatarImage src={avatar.image} alt="" />
                                        <AvatarFallback>{avatar.fallback}</AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                            <div>
                                <p className="text-muted-2-foreground mb-1 text-sm italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <p className="text-muted-2-foreground text-sm font-medium">
                                    {testimonial.author}, {testimonial.role} @{testimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-1">
                        <div className="w-full max-w-[50rem]">
                            <AspectRatio ratio={1 / 1} className="h-full w-full">
                                <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-[3.5%]">
                                    <div className="border-muted bg-muted overflow-hidden rounded-[5.2%] border">
                                        <img
                                            src={images.first}
                                            alt=""
                                            className="object-fit h-full w-full object-center"
                                        />
                                    </div>
                                    <div className="border-muted bg-muted relative overflow-hidden rounded-[5.2%] border">
                                        <div className="absolute top-1/2 left-[5%] w-[110%] max-w-[25rem] -translate-y-1/2 overflow-hidden rounded-md">
                                            <AspectRatio ratio={1.739130435 / 1}>
                                                <img
                                                    src={images.second}
                                                    alt=""
                                                    className="size-full object-cover object-center"
                                                />
                                            </AspectRatio>
                                        </div>
                                    </div>
                                    <div className="border-muted bg-muted relative overflow-hidden rounded-[5.2%] border">
                                        <div className="absolute top-[9%] left-[9%] w-[200%] max-w-[37.5rem] overflow-hidden rounded-md">
                                            <AspectRatio ratio={1.6 / 1}>
                                                <img
                                                    src={images.third}
                                                    alt=""
                                                    className="size-full object-cover object-center"
                                                />
                                            </AspectRatio>
                                        </div>
                                    </div>
                                    <div className="border-muted bg-muted relative overflow-hidden rounded-[5.2%] border">
                                        <div className="relative top-[12%] left-[50%] w-[70%] max-w-[17.5rem] -translate-x-[50%]">
                                            <AspectRatio ratio={0.52 / 1}>
                                                <img
                                                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-1.png"
                                                    alt=""
                                                    className="absolute z-20 w-full"
                                                />
                                                <img
                                                    src={images.fourth}
                                                    alt=""
                                                    className="absolute z-10 w-full rounded-[16%]"
                                                />
                                            </AspectRatio>
                                        </div>
                                    </div>
                                </div>
                            </AspectRatio>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
