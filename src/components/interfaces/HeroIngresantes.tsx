import { BackgroundLines } from '@/components/ui/background-lines';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { UserRoundPen } from 'lucide-react';

const HeroIngresantes = () => {
    return (
        <section className="relative flex h-150 w-full items-center justify-center overflow-hidden py-32">
            <BackgroundLines className="container flex w-full flex-col items-center justify-center px-4 md:h-full">
                <h2 className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-10 lg:text-6xl">
                    Inscripciones Ingresantes {new Date().getFullYear() + 1}
                </h2>
                <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg">
                    ¡Bienvenidos y bienvenidas al Ingreso 2026 de la Facultad de Ciencias Exactas,
                    Físicas y Naturales de la Universidad Nacional de San Juan. En cada una de las
                    siguientes pestañas encontrarás toda la información necesaria. Primero debes
                    preinscribirte para cursar los módulos del ingreso.
                </p>
                <div className="relative z-20 mt-10 flex w-full max-w-md items-center gap-3 rounded-full p-1">
                    <Button className="h-10 w-full rounded-xl">
                        Preinscribirme
                        <UserRoundPen className="ml-2 h-4 w-4" />
                    </Button>
                </div>
                <div className="mt-10 flex items-center gap-2">
                    <span className="inline-flex items-center -space-x-2.5">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <Avatar key={index} className="size-8">
                                <AvatarImage
                                    src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar${index + 1}.png`}
                                    alt="placeholder"
                                />
                            </Avatar>
                        ))}
                    </span>
                    <p className="text-muted-foreground/80 tracking-tight">
                        +1000 estudiantes ya se preinscribieron
                    </p>
                </div>
            </BackgroundLines>
        </section>
    );
};

export { HeroIngresantes };
