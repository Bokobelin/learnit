"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Code, Users, ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
    </div>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 w-screen backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LearnIT</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#courses" className="text-sm font-medium transition-colors hover:text-primary">
            Courses
          </Link>
          {/*
          <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          */}
          <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#courses"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            {/*
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            */}
            <Link
              href="#pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button asChild>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="inline-flex" variant="secondary">
                New Updates Weekly
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Learn to code with confidence
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Master programming skills with lessons and expert guidance. Start your
                coding journey today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">Start Learning Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#courses">Explore Courses</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                  >
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Join <span className="font-medium">1+</span> students already learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="inline-flex" variant="outline">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need to learn coding
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides all the tools and resources you need to master programming skills and build
              real-world projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          {[
            {
              icon: <Code className="h-10 w-10 text-primary" />,
              title: "Project-Based Learning",
              description: "Build real-world applications that you can add to your portfolio.",
            },
            {
              icon: <Users className="h-10 w-10 text-primary" />,
              title: "Community Support",
              description: "Connect with fellow learners and mentors to solve problems together.",
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-primary" />,
              title: "Skill Certification",
              description: "Earn certificates to showcase your programming expertise to employers.",
            },
          ].map((feature, index) => (
            <Card key={index} className="border-0 shadow-none bg-background">
              <CardHeader>
                <div className="p-2 rounded-lg bg-primary/10 w-fit">{feature.icon}</div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoursesSection() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="inline-flex" variant="outline">
              Courses
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Popular Learning Paths</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose from our most popular courses and start your coding journey today.
            </p>
          </div>
        </div>

        <Tabs defaultValue="python" className="mt-12">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="python">Python</TabsTrigger>
              {/*
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="data">Data Science</TabsTrigger>
              */}
            </TabsList>
          </div>

          <TabsContent value="python" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Python for beginners",
                  description: "Learn Python and start building apps.",
                  level: "Beginner",
                },
              ].map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </TabsContent>
          {/*

          <TabsContent value="mobile" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "React Native Basics",
                  description: "Create cross-platform mobile apps using your React knowledge.",
                  level: "Intermediate",
                  duration: "8 weeks",
                  image: "/placeholder.svg?height=200&width=300&text=React+Native",
                },
                {
                  title: "iOS Development with Swift",
                  description: "Build native iOS applications for iPhone and iPad.",
                  level: "Intermediate",
                  duration: "10 weeks",
                  image: "/placeholder.svg?height=200&width=300&text=iOS+Swift",
                },
                {
                  title: "Android Development with Kotlin",
                  description: "Create native Android applications with modern Kotlin.",
                  level: "Intermediate",
                  duration: "10 weeks",
                  image: "/placeholder.svg?height=200&width=300&text=Android+Kotlin",
                },
              ].map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Python for Data Science",
                  description: "Learn Python programming and essential data analysis libraries.",
                  level: "Beginner",
                  duration: "6 weeks",
                  image: "/placeholder.svg?height=200&width=300&text=Python+Data",
                },
                {
                  title: "Machine Learning Fundamentals",
                  description: "Understand core ML concepts and build your first models.",
                  level: "Intermediate",
                  duration: "8 weeks",
                  image: "/placeholder.svg?height=200&width=300&text=Machine+Learning",
                },
                {
                  title: "Deep Learning & Neural Networks",
                  description: "Master advanced AI techniques for complex data problems.",
                  level: "Advanced",
                  duration: "12 weeks",
                  image: "/placeholder.svg?height=200&width=300&text=Deep+Learning",
                },
              ].map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </TabsContent>
          */}
        </Tabs>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

interface Course {
  title: string;
  description: string;
  level: string;
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex justify-between items-center">
          <Badge variant="outline">{course.level}</Badge>
        </div>
        <CardTitle className="mt-2">{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}>Enroll Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
    {/*
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="inline-flex" variant="outline">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What our students say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our community of learners who have transformed their careers through our platform.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {[
            {
              name: "Alex Johnson",
              role: "Frontend Developer at TechCorp",
              image: "/placeholder.svg?height=80&width=80&text=AJ",
              content:
                "LearnIT helped me transition from a non-technical role to a full-time developer position in just 6 months. The project-based approach gave me a portfolio that impressed employers.",
            },
            {
              name: "Sarah Chen",
              role: "Mobile App Developer",
              image: "/placeholder.svg?height=80&width=80&text=SC",
              content:
                "The React Native course was exactly what I needed to launch my freelance career. The instructors were responsive and the community support was invaluable when I got stuck.",
            },
            {
              name: "Michael Rodriguez",
              role: "Data Scientist",
              image: "/placeholder.svg?height=80&width=80&text=MR",
              content:
                "I tried several platforms before finding LearnIT. The data science curriculum was comprehensive and up-to-date with industry standards. I now work at a leading AI company.",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="text-left">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      */}
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="inline-flex" variant="outline">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that&apos;s right for your learning journey. All plans include access to our community.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 justify-center">
          {[
            {
              title: "Free",
              price: "$0",
              description: "Perfect for beginners looking to explore coding basics.",
              features: [
                "Access to all courses",
                "Free community support",
                "Coding exercises",
                "Free forever",
              ],
              cta: "Get Started",
              popular: false,
            }
          ].map((plan, index) => (
            <Card key={index} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="py-1 px-4 bg-primary text-primary-foreground text-xs font-medium text-center">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                  <Link href={plan.title === "Teams" ? "/contact" : "/signup"}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          All plans come with a 14-day money-back guarantee. No credit card required for free plan.
        </div>
      </div>
    </section>
  )
}